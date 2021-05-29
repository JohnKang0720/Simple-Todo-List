import React, { useContext } from 'react'

function List({task, remove, length, edit}) {

   
    return (
        <div>
        <li>
            <span> {task.task}</span>
            <div>
                <button onClick = {() => remove(task.id)}> Remove </button>
                <button onClick = {edit}> Edit </button>
            </div>
        </li>

      
        </div>
        

    )
}

export default List
