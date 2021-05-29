import React, { useContext } from 'react'

function List({task, addTodos}) {

    return (
        <li>
            <span> {task.task}</span>
            <div>
                <button onClick = {addTodos}> Add Todos </button>
                <button> Remove Todos </button>
            </div>
        </li>

    )
}

export default List
