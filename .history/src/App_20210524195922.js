import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import React, {useState} from 'react'

function App() {
  const [todos, settodos] = useState('')
  const addtodo = todos => { 
    if(!todos.text || /^\s*$/.test(todos.text)){
      return;
    }

    const newTodos = [todos, ...todos]

    settodos(newTodos)
    console.log(...todos)
    
  }
  return (
    <div className="App">
     <p> Todo List App</p>
    <TodoList onSubmit = {addtodo}/>
    </div>
  );
}

export default App;
