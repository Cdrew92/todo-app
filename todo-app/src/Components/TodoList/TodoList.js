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
            /> 
            )};
        </div>
    );
  }
}

export default TodoList;