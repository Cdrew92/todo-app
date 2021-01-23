import React from 'react';
import TodoItem from '../TodoItem/TodoItem';


class TodoList extends React.Component {

    constructor(props) {
        super(props);

    }

  render() {
    return (
        <div>
            {this.props.List.map(listItem => 
            <TodoItem 
            key={listItem.id}
            Item={listItem} 
            RemoveTodo={this.props.RemoveTodo}
            /> 
            )};
        </div>
    );
  }
}

export default TodoList;