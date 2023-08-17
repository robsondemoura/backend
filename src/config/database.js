const mongoose = require('mongoose')


async function main(){
    try {
        const url = process.env.MONGODB_URI 
        mongoose.set("strictQuery",true)
        await mongoose.connect(url)
        console.log('Conectado')
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = main

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório"

mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
    
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."