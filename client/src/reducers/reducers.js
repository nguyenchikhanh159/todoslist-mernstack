import * as types from "./../constants/Action";

var initialState = {
  loading: false,
  todos: []
};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODOS:
      return {
        ...state,
        loading:false,
        todos: action.payload
      };
    case types.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
      case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo=>todo._id===action.payload)
      };
      case types.COMPLETE_TODO:
      return {
        ...state,
        todos:state.todos.map(todo=>{
            if(todo._id===action.payload) return{
                ...todo,
                isCompleted:!todo.isCompleted
            }
            return todo;
        })
      };
      case types.LOAD_TODOS:
      return{
          ...state,
          loading:true
      }
    default:
      return state;
  }
};

export default itemEditing;
