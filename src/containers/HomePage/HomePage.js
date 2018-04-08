import React, { Component } from 'react';
import './HomePage.css';

import Todo from '../../components/Todo/Todo';

class HomePage extends Component {
  render() {
    return (
      <main>
        <h1>Welcome.</h1>
        <p>This repository is a boilerplate application for using Create React App frontend with a Express and Mongo backend.</p>
        <h4>Todo List</h4>
        <p>Add items to the list.</p>
        <p>Click the items to remove them from the list.</p>
        <Todo />
      </main>
    );
  }
}

export default HomePage;
