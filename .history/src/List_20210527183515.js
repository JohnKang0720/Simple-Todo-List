import React, { useContext } from 'react'

function List({task, remove}) {


    return (
        <div>
        <li>
            <span> {task.task}</span>
            <div>
                <button onClick = {() => remove(task.id)}> Remove </button>
                <button> Edit </button>
            </div>
        </li>
        <p> No Tasks </p>
        </div>
        

    )
}

export default List
