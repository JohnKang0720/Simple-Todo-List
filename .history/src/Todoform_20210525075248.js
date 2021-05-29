import React, {useContext, useState} from 'react'
import {taskContext} from './TodoList'
import List from './List'
function Todoform() {
    const {input, addTask} = useContext(taskContext)
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
           <button > Add Todos </button>
           <button> Clear </button>
           </div>
       </form>

        <ul>
            {/* why does it have to be "input??" */}
            {input.map((task) => {
            return (
                
            <List task = {task} key = {task.id} />
           
            
            )
            })}
        </ul>
        </div>
    )
}

export default Todoform
