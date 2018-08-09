import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import TodoList from './todo_list'

const App = () => (
    <div className="container">
        <h1 className="center">To Do List</h1>
        <TodoList />
    </div>
);

export default App;
