import React, { Component } from 'react';
import './Todo.css';
import TodoList from '../TodoList/TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.newId = 0;
    this.state = {
      newItem: '',
      items: []
    };

    this.updateTodoInput = this.updateTodoInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  updateTodoInput(e) {
    this.setState({
      newItem: e.target.value
    });
  }

  addItem(e) {
    e.preventDefault();
    if (this.state.newItem.trim().length) {
      let newObj = {
        id: this.newId++,
        value: this.state.newItem
      };

      this.setState({
        newItem: '',
        items: [...this.state.items, newObj]
      });
    }
  }

  removeItem(id) {
    let itemIndex = this.state.items.findIndex(item => {
      return item.id === id;
    });
    this.state.items.splice(itemIndex, 1);
    this.setState({
      items: [...this.state.items]
    });
  }

  removeAll() {
    this.setState({
      items: []
    });
  }

  render() {
    return (
      <div className="todo">
        <div className="input-actions">
          <form onSubmit={ this.addItem }>
            <input
              type="text"
              placeholder="Add an item"
              value={ this.state.newItem }
              onChange={ this.updateTodoInput }
            />
          </form>
          <button className="clear-list-button" onClick={ this.removeAll }>Remove All</button>
        </div>
        <TodoList list={ this.state.items } removeItem={ this.removeItem } />
      </div>
    );
   }
 }

 export default Todo;
