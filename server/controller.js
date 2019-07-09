const Todo=require('./model')

exports.create=async(req,res,next)=>{
    const {text}=req.body
    try{
        const newTodo=new Todo({
            text
        })
        await newTodo.save()
        return res.json(newTodo)
    }catch(error){
        console.log(error)
    }
}
exports.getAll=async(req,res,next)=>{
    try{
        const todos= await Todo.find();
        return res.json(todos)
    }catch(err){
        console.log(err);
    }
}
exports.delete=async(req,res,next)=>{
    try{
        const todo=Toto.findById(req.params.todoId)
        await todo.remove()
        return res.json({todoID:req.params.todoId})
    }catch(err){
        console.log(err)
    }
}
exports.complete=async(req,res,next)=>{
    try{
        const todo=await Todo.findById(req.params.todoId)
        todo.isComplete!=todo.isComplete
        await todo.save()
        return res.json({todoId:req.params.todoId})
    }catch(err){
        console.log(err);
    }
}


// let current_day=['Mon','Tue','Wed','Thu','Fri','Sat']
//    let day_name=['Thu 2','Thu 3','Thu 4','Thu 5','Thu 6','Thu 7']
//    let flag='Wed'
// // pass a function to map
// const current_day1 = current_day.map((a,index)=>{
//     if(flag===a)
//   console.log(day_name[index])