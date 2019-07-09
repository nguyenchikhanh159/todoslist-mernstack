import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const GET_TODOS = "GET_TODOS";
export const LOAD_TODOS = "LOAD_TODOS";
export const COMPLETE_TODO = "COMPLETE_TODO";

axios.defaults.baseURL = "http://localhost:5000/api";

export const getTodos = () => dispatch => {
  dispatch({type:LOAD_TODOS})
  axios.get("./todos").then(res => dispatch({
      type:GET_TODOS,
      payload:res.data
  }))
  .catch(err=>console.log(err));
};
export const addTodo=(text)=>(dispatch)=>{
  axios.post('/todos',{text:text})
    .then(res=>dispatch({
      type:ADD_TODO,
      payload:res.data
    })).catch(error=>console.log(error))
}
export const deleteTodo=(todoId)=>(dispatch)=>{
  axios.post(`/todos/${todoId}`)
    .then(res=>dispatch({
      type:DELETE_TODO,
      payload:res.data.todoId
    })).catch(error=>console.log(error))
}
export const completeTodo=(todoId)=>(dispatch)=>{
  axios.post(`/todos/${todoId}/complete`)
    .then(res=>dispatch({
      type:COMPLETE_TODO,
      payload:res.data.todoId
    })).catch(error=>console.log(error))
}
