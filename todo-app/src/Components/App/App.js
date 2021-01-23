import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ListOfTodos: ['TEST1', 'TEST2'],
      TodoInput: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.AddTodo = this.AddTodo.bind(this);
  }

  handleInput(input) {
    this.setState({
      TodoInput: input,
    });
  }

  AddTodo() {
    let TodoInput = this.state.TodoInput;
    let Todos = this.state.ListOfTodos;
    Todos.push(TodoInput);
    this.setState({ListOfTodos: Todos})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>ToDo List</h1>
        <div className="list-container">
          <AddTodo AddTodo={this.AddTodo} handleInput={this.handleInput}/>
          <TodoList List={this.state.ListOfTodos}/>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
