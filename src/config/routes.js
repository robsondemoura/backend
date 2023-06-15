const express = require('express')
const auth = require('./auth')

module.exports = function(server){
    //API Routes --- Protected for JWT 

    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    // ToolFlow Routes
    const toolFlowService = require('../api/toolFlow/toolFlowService')
    toolFlowService.register(protectedApi, '/tools')

    //API Public ----------------

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}