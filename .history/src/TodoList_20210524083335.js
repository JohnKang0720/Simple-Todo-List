import React, {useState} from 'react'

function TodoList() {
    const [input, setinput] = useState('')
    return (
        <div>
           <form  className = "todo-form">
               <input type = "text" placeholder = "Add todos" value = {input} />
           </form>
        </div>
    )
}

export default TodoList
