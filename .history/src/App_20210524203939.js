import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import {taskContext} from './TodoList'
import React, {useContext, useState} from 'react'
import Todoform from './Todoform';

function App() {
  const {tasks} = useContext(taskContext)
  return (
    <div className="App">
     <p> Todo List App</p>
    <ul> {tasks.map((task) => {
      return <Todoform/>
    })}</ul>
    </div>
  );
}

export default App;
