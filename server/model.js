const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const todoSchema=new Schema({
    text:{type:String,required:true},
    inCompleted:{type:Boolean,default:false},
    createAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model('Todo',todoSchema)