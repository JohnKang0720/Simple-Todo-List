import React, {useState, createContext} from 'react'
import Todoform from './Todoform'

export const taskContext = createContext(null)
const TodoList = (props) => {
 
 const [input, setInput] = useState([
  {task: "Read", id: 1},
  {task: "Dishes", id: 2},
  {task: "HW", id: 3}
 ])

 function addTask(){
console.log("Hello")
 }



 return(
    <taskContext.Provider value = {{input, addTask}}>
    {props.children}
    </taskContext.Provider>
 )
}

export default TodoList
