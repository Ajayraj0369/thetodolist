import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  //To add a todo item
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({ list, newItem: "" });
    }
  }

  //function to delete a todo item
  deleteItem(id) {
    console.log(id);
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  //function which sets the value of input item
  updateInput(input) {
    this.setState({ newItem: input });
    console.log("changed");
  }

  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">The TODO App</h1>
        <div className="container">
          Add an item..
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add to Do
          </button>
          <br />
          <ul>
            {[...this.state.list].map((item) => {
              return (
                <li key={item.id}>
                  <input type="checkbox" name="" id="" />
                  {item.value}
                  <button
                    className="delete"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
