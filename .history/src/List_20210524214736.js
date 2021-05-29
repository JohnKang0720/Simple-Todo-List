import React from 'react'

function List({task}) {
    return (
        <li>
            <span> {task}</span>
            <div>
                <button> Add Todos </button>
                <button> Remove Todos </button>
            </div>
        </li>

    )
}

export default List
