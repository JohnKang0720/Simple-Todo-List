import React, { useContext } from 'react'

function List({task, addTask}) {

    return (
        <li>
            <span> {task.task}</span>
            <div>
                <button> Add Todos </button>
                <button> Remove Todos </button>
            </div>
        </li>

    )
}

export default List
