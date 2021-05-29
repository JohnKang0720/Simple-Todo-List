import React, {useContext} from 'react'
import {taskContext} from './TodoList'
import List from './List'
function Todoform() {
    const {input} = useContext(taskContext)
    return (
      
        <ul>
            {input.map((task) => {
            return (
            <List/>
            )
            })}
        </ul>
     
    )
}

export default Todoform
