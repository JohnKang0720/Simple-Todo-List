import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import React, {useState} from 'react'

function App() {
 
  return (
    <div className="App">
     <p> Todo List App</p>
    <TodoList />
    </div>
  );
}

export default App;
