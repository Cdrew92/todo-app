import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ListOfTodos: [],
      TodoInput: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.AddTodo = this.AddTodo.bind(this);
    this.RemoveTodo = this.RemoveTodo.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  handleInput(input) {
    this.setState({
      TodoInput: input,
    });
  }

  getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }

  AddTodo() {
    let TodoInput = this.state.TodoInput;
    let InputAndDate = {input: TodoInput, DateAdded: this.getDate()};
    if (TodoInput) {
      let Todos = this.state.ListOfTodos;
      Todos.push(InputAndDate);
      let flatTodos = {...Todos.flat()}
      this.setState({ListOfTodos: Todos})
    }
  }

  RemoveTodo(todo) {
    let Todos = this.state.ListOfTodos;
    let index = Todos.indexOf(todo);
    Todos.splice(index, 1);
    this.setState({ListOfTodos: Todos})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>ToDo List</h1>
        <div className="list-container">
          <AddTodo AddTodo={this.AddTodo} setDate={this.getDate} handleInput={this.handleInput}/>
          <TodoList RemoveTodo={this.RemoveTodo} List={this.state.ListOfTodos}/>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
