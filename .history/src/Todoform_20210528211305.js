import React, {useContext, useState} from 'react'
import {taskContext} from './TodoList'
import List from './List'
import { DetectFacesTaskBase } from 'face-api.js'
function Todoform() {
    const {input, addTask, removeTask, clearTask} = useContext(taskContext)
    const [title, settitle] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault();
      
      addTask(title)
      settitle('')
    } 
    const handleChange = (e) => {
  
    settitle(e.target.value)
   
    
    }
  
    return (
        <div>
       <form onSubmit = {handleSubmit}> 
           <input type = "text" placeholder = "Add todos" onChange = {handleChange} value = {title}/> 
           <div>
           <button onClick = {() => addTask}> Add Todos </button>
           <button onClick = {clearTask}> Clear </button>
           </div>
           <p> {input.length === 0 ? "No tasks" : `Tasks: ${input.length}`} </p>
 
           
       </form>
       
        <ul>
            
            {/* why does it have to be "input??" */}
            {input.map((task) => {
            return (
                
            <List task = {task} key = {task.id} remove = {removeTask} length = {input.length} />
           
            
            )
            })}
        </ul>
        </div>
    )
}

export default Todoform
