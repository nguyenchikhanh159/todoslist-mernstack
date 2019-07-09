import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos } from "./../constants/Action";
import Todo from './Todo';
class ListTodo extends Component {
  componentWillMount() {
    this.props.getTodos();
  }
  render() {
    const {todos}=this.props
    return (
          <ul>
         
         { todos.map(todo=><Todo key={todo._id}  todo={todo}/>)}
         
          </ul>
    )
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  getTodos
)(ListTodo);
