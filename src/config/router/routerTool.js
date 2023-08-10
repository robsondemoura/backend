const router = require("express").Router()

const toolFlowController = require("../../api/toolFlow/toolFlowService")

router.route('/tools').post((req,res)=> toolFlowController.create(req,res))

router.route('/tools').get((req,res)=> toolFlowController.getAll(req,res))

router.route('/tools/:id').get((req,res)=>toolFlowController.get(req,res))

router.route('/tools/:id').delete((req,res)=>toolFlowController.delete(req,res))

router.route('/tools/:id').put((req,res)=> toolFlowController.update(req,res))

module.exports = router