const router=require('express').Router()
const controller =require('./controller')
// router.get('/',(req,res)=>{
//     res.send('Ok!')
// })
router.get('/',controller.getAll)
router.post('/', controller.create)
router.post('/:todoId',controller.delete)
router.post('/:todoId/complete',controller.complete)

module.exports=router