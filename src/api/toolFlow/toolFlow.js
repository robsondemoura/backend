const mongoose = require('mongoose')

const {Schema} = mongoose

const toolSchema = new Schema({
    name:{type: String, required: [true, 'Informe a ferramenta que o funcionário solicitou.']},
    day:{type: Number, min:1, max:31, required: true},
    month:{type: Number, min:1, max:12, required: true}
})

const toolFlowSchema = new mongoose.Schema({
    name:{type: String, required: true, uppercase: true},
    function:{type: String, required: true},
    tool:[toolSchema]
})
const ToolFlow = mongoose.model('ToolFlow', toolFlowSchema)


module.exports = {ToolFlow, toolFlowSchema}