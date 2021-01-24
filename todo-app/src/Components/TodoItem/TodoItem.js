import React from 'react';
import TodoList from '../TodoList/TodoList';
import './TodoItem.css';
class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.RemoveTodo = this.RemoveTodo.bind(this);
    }

    RemoveTodo() {
        this.props.RemoveTodo(this.props.Item)
    }

  render() {
    return (
        <div className="Todo-item">
            <input disabled value={this.props.Item.input} className="Todo-item-input"></input>
            <div className="Date-Added">
                <p>Date Added: {this.props.Item.DateAdded}</p>
            </div>
            <div className="Remove-button-container">
            <button onClick={this.RemoveTodo} type="submit" className="Remove-todo-button">X</button>
            </div>
        </div>
    )
  }
}

export default TodoItem