import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import {taskContext} from './TodoList'
import React, {useContext, useState} from 'react'
import Todoform from './Todoform';

const styles = {
  background: 'red'
}
function App() {

  return (
    <TodoList >
    <div className="App"style = {{styles}}>
     John's Todo List
   <Todoform />
    </div>
    </TodoList>
    
  );
}

export default App;
