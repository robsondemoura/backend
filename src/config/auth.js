const jwt = require('jsonwebtoken')


module.exports = (req,res,next) => {

    const secret = process.env.AUTH_SECRET
     //CORS preflight request
    if(req.method === 'OPTIONS'){
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']

        if(!token){
            return res.status(403).send({errors:['Nenhum token foi providenciado.']})
        }

        jwt.verify(token, secret, function(err,decoded){
            if(err){
                return res.status(403).send({errors:['Failed to authenticate token']})
            } else{
                req.decoded = decoded
                next()
            }
        })
    }
}