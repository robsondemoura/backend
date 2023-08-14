const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User} = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res,dbErrors) =>{
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({errors})
}

const login = async (req,res,next)=>{
    const email = req.body.email || ''
    const password = req.body.password || ''

    const user = await User.findOne({email}).exec() 

    if(!user){
        res.status(400).send({errors:["Usuário não encontrado"]})
        
    } else if(bcrypt.compareSync(password, user.password)){
        const token = jwt.sign(user.toJSON(), process.env.authSecret, {expiresIn:"1 day"})

        const {name, email} = user

        res.json({name, email, token})
    } else{
        return res.status(400).send({errors:["Usuário e/ou Senha inválidos"]})
    }
}

const validateToken = (req, res, next) =>{
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function(err, decoded){
        return res.status(200).send({valid: !err})
    })
} 
  

const signup = async (req, res, next) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''

    if(!email.match(emailRegex)){
        return res.status(400).send({errors:['O e-mail informado está inválido.']})
    }
    if(!password.match(passwordRegex)){
        return res.status(400).send({errors:['A senha precisa ter: Uma letra maiúscula, uma letra minúscula, um número, um caractere especial(@#$%) e tamanho entre 6-20. ']})
    }

    if(password !== confirmPassword){
        return res.status(400).send({errors:['As senhas não conferem']})
    }

    try {
        const user = await  User.findOne({email}).exec()

        if(user){
            return res.status(400).send({errors:['Usuário já cadastrado']})
        } 

        const salt = bcrypt.genSaltSync()
        const passwordHash = bcrypt.hashSync(password,salt)

        const newUser = new User({name, email, password: passwordHash})
        await newUser.save()

        const loginResult = await login(req,res,next)
        return loginResult

    } catch (error) {
        return sendErrorsFromDB(res, err)
    }

}

module.exports = {login, signup, validateToken}