import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./../constants/Action";
class AddTodo extends Component {
  handleSubmit = e => {
    if ((e.key === "Enter")) {
      this.props.addTodo(e.target.value);
      e.target.value = "";
    }
  };
  render() {
    return <input onKeyPress={this.handleSubmit} />;
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
