import React, { useContext } from 'react'

function List({task, remove, length}) {

   
    return (
        <div>
        <li>
            <span> {task.task}</span>
            <div>
                <button onClick = {() => remove(task.id)}> Remove </button>
                <button> Edit </button>
            </div>
        </li>
      <p> {length < 1 ? "No Tasks" : ""} </p> 
        </div>
        

    )
}

export default List
