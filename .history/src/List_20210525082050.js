import React, { useContext } from 'react'

function List({task, remove}) {


    return (
        <li>
            <span> {task.task}</span>
            <div>
                <button > Remove </button>
                <button> Edit </button>
            </div>
        </li>

    )
}

export default List
