//modules
const express=require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser')

const todoRoutes=require('./route')
//connect database
mongoose.connect('mongodb://localhost/todo',{useNewUrlParser:true});
// create server
const app=express();
// config middleware
app.use(bodyParser.json())
app.use((cors))
//routes
app.use('/api/todos',todoRoutes)
// run server 
app.listen(5000,()=>console.log('Server is running port 5000'));