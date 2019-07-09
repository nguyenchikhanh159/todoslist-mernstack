import React, { Component } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <AddTodo />
        </div>
        <ListTodo />
      </div>
    );
  }
}

export default App;
