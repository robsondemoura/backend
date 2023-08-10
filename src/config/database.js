const mongoose = require('mongoose')


async function main(){
    try {
        mongoose.set("strictQuery",true)
        await mongoose.connect('mongodb://127.0.0.1/toolFlow')
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
/*
const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://127.0.0.1/toolFlow'
module.exports = mongoose.connect(url)*/


module.exports = main

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório"

mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
    
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."