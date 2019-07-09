import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleTodo,completeTodo} from './../constants/Action';

class Todo extends Component {

  
  handleDelete=()=>{
    this.props.deleTodo(this.props.todo._id);
  }
  handleComplete=()=>{
    this.props.completeTodo(this.props.todo._id);
  }

  render() {
    var {todo}=this.props
    return (
     <li className={todo.isComplete?'checked':''}>
        <span onClick={this.handleComplete}>{todo.text}</span>
        <span 
        onClick={this.handleDelete}
        className="close">&#10799;</span>
     </li>
    );
  }
}

export default connect(null,{deleTodo,completeTodo})(Todo);
