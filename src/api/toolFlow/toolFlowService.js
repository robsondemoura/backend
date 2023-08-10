const {ToolFlow : ToolFlowModel} = require('./toolFlow')

/*ToolFlow.methods(['get','post','put','delete'])
ToolFlow.updateOptions({new: true, runValidators: true})
ToolFlow.after('post',errorHandle).after('put',errorHandle)*/

const toolFlowController = {
    create: async(req,res)=>{
        try {
            const toolFlow ={
                name: req.body.name,
                function: req.body.function,
                tool: req.body.tool
            }
            const response = await ToolFlowModel.create(toolFlow)

            res.status(200).json(response)

        } catch (error) {
        console.log(error)
        }
    },
    getAll: async(req,res)=>{
        try {
            const toolsFlow = await ToolFlowModel.find()
            res.json(toolsFlow)
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req,res)=>{
        try {
            const id = req.params.id
            const service = await BillingCycleModel.findById(id)
            if(!service){
                res.status(400).json({msg:"Página não encontrada"})
                return
            }

            res.json(service)

        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res)=>{
        try {
            const id = req.params.id
            const service = await ToolFlowModel.findById(id)

            if(!service){
                res.status(400).json({msg:"Página não encontrada"})
                return
            }
            const exclude = await ToolFlowModel.findByIdAndDelete(id)

            res.status(200).json(exclude)

        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) =>{
        try {
            const id = req.params.id
            const service = {
                name: req.body.name,
                function: req.body.function,
                tool: req.body.tool
            }
            const updateService = await ToolFlowModel.findByIdAndUpdate(id,service)

            if(!updateService){
                res.status(400).json({msg:"Pagina não encontrada"})
                return
            }
            res.status(200).json(service)

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = toolFlowController
