const restful = require('node-restful')
const mongoose = restful.mongoose


const toolSchema = new mongoose.Schema({
    name:{type: String, required: [true, 'Informe a ferramenta que o funcionário solicitou.']},
    day:{type: Number, min:1, max:31, required: true},
    month:{type: Number, min:1, max:12, required: true}
})

const toolFlowSchema = new mongoose.Schema({
    name:{type: String, required: true, uppercase: true},
    function:{type: String, required: true},
    tool:[toolSchema]
})

module.exports = restful.model('ToolFlow', toolFlowSchema)