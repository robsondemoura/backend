const errorHandle = require('../common/errorHandle')
const ToolFlow = require('./toolFlow')

ToolFlow.methods(['get','post','put','delete'])
ToolFlow.updateOptions({new: true, runValidators: true})
ToolFlow.after('post',errorHandle).after('put',errorHandle)

module.exports = ToolFlow
