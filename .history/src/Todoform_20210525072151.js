import React, {useContext} from 'react'
import {taskContext} from './TodoList'
import List from './List'
function Todoform() {
    const {input, addTask} = useContext(taskContext)

    const handleSubmit = (e) => {
      e.preventDefault();
    }
    const handleChange = (e) => {

    }
    return (
        <div>
       <form onSubmit = {handleSubmit}> 
           <input type = "text" placeholder = "Add todos" onChange = {handleChange}/> 
           <div>
           <button onClick = {addTask}> Add Todos </button>
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
