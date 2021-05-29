import React, {useContext} from 'react'
import {taskContext} from './TodoList'
function Todoform() {
    const {tasks} = useContext(taskContext)
    return (
      
        <ul>
            {tasks.map((task) => {
            return (
                <p> {task}</p>
            )
            })}
        </ul>
     
    )
}

export default Todoform
