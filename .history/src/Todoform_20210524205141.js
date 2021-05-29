import React, {useContext} from 'react'
import {taskContext} from './TodoList'
import List from './List'
function Todoform() {
    const {sdasd} = useContext(taskContext)
    return (
      
        <ul>
            {sdasd.map((task) => {
            return (
            <List/>
            )
            })}
        </ul>
     
    )
}

export default Todoform
