import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import React, {useState} from 'react'

function App() {
  const [todos, addtodos] = useState('')
  function addtodo(){
console.log("hi")
  }
  return (
    <div className="App">
     <p> Todo List App</p>
    <TodoList onSubmit = {addtodo}/>
    </div>
  );
}

export default App;
