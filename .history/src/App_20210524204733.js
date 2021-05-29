import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import {taskContext} from './TodoList'
import React, {useContext, useState} from 'react'
import Todoform from './Todoform';

function App() {

  return (
    <div className="App">
     John's Todo List
     <TodoList></TodoList>
    </div>
  );
}

export default App;
