import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import {taskContext} from './TodoList'
import React, {useContext, useState} from 'react'

function App() {
  const {tasks} = useContext(TodoList)
  return (
    <div className="App">
     <p> Todo List App</p>
    <div> </div>
    </div>
  );
}

export default App;
