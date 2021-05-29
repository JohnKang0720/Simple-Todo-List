import React, {useContext} from 'react'
import {taskContext} from './TodoList'
import List from './List'
function Todoform() {
    const tasks = useContext(taskContext)
    return (
      
        <ul>
            {tasks.map((task) => {
            return (
            <List/>
            )
            })}
        </ul>
     
    )
}

export default Todoform
