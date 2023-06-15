const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://127.0.0.1/toolFlow'
module.exports = mongoose.connect(url)

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório"

mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
    
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."