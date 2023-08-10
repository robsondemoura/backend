const express = require("express")
const cors = require("cors")
const loader = express()

const PORT = process.env.PORT

loader.use(cors())
loader.use(express.json())
loader.use(express.urlencoded({extended: true}))

const connection = require('./config/database')

connection()

const {router, publicRouter} = require('./config/router/routes')

loader.use('/api', router)
loader.use('/oapi', publicRouter)

loader.listen(PORT, function(){
    console.log("BACKEND is running on port 3003")
})