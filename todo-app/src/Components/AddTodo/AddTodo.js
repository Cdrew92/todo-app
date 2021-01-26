import React from 'react';
import './AddTodo.css';


class AddTodo extends React.Component {

    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.props.handleInput(e.target.value)
    }

  render() {
    return (
      <div className="Add-todo">
          <input value={this.props.TodoInput} onChange={this.handleInput} className="Add-todo-input"></input>
          <div className="Button-container">
          <button onClick={this.props.AddTodo} type="submit" className="Add-todo-button">Add To List</button>
          </div>
      </div>
    );
  }
}

export default AddTodo;