import React, {useContext} from 'react'
import {taskContext} from './TodoList'
import List from './List'
function Todoform() {
    const {input, addTask} = useContext(taskContext)
    return (
        <div>
       <form> 
           <input type = "text" placeholder = "Add todos" /> 
       </form>
       
        <ul>
            {/* why does it have to be "input??" */}
            {input.map((task) => {
            return (
                
            <List task = {task} key = {task.id} addTodos = {addTask}/>
           
            
            )
            })}
        </ul>
        </div>
    )
}

export default Todoform
