import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul className="todolist">
          { this.props.list.map(item => {
            return (
              <li key={ item.id } onClick={ () => this.props.removeItem(item.id) }>{ item.value }</li>
            )
          }) }
        </ul>
      </div>
    );
  }
}

export default TodoList;
