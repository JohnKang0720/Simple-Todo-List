import { DetectFacesTaskBase } from 'face-api.js'
import React, {useState, createContext} from 'react'
import Todoform from './Todoform'
import uuid from "uuid"

export const taskContext = createContext(null)
const TodoList = (props) => {
 
 const [input, setInput] = useState([
  {task: "Read", id: 1},
  {task: "Dishes", id: 2},
  {task: "HW", id: 3}
 ])

 function addTask(task){
setInput([...input, {task, id: 0 }  ])
 }
//  "task" along with the argument names the task off of e.target.value



 return(
    <taskContext.Provider value = {{input, addTask}}>
    {props.children}
    </taskContext.Provider>
 )
}

export default TodoList
