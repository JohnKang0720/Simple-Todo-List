import React, {useContext} from 'react'
import {taskContext} from './TodoList'
import List from './List'
function Todoform() {
    const {input} = useContext(taskContext)
    return (
      
        <ul>
            {/* why does it have to be "input??" */}
            {input.map((task) => {
            return (
                
            <List task = {task}/>
           
            
            )
            })}
        </ul>
     
    )
}

export default Todoform
