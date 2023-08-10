const router = require("express").Router()

const {login, signup, validateToken} = require("../../api/user/authService")

router.route('/login').post((req, res)=>login(req,res))
router.route('/signup').post((req,res)=>signup(req,res))
router.route('/validateToken').post((req,res)=>validateToken(req,res))

module.exports = router