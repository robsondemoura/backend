const router = require('express').Router()
const publicRouter = require('express').Router()
const auth = require('../auth')
const routerTool = require('../router/routerTool')
const routerAuth = require('../router/routerAuth')


//API Routes ----- Protected for JWT 

router.use('/', routerTool)
routerTool.use(auth)

//API Public 

publicRouter.use('/', routerAuth)

module.exports = {router, publicRouter}
