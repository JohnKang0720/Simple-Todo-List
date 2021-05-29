import React, {useState} from 'react'

function TodoList() {
    const [input, setinput] = useState('')
    const style = {
        display: "flex"
    }
    return (
        <div>
           <form  className = "todo-form" style = {style}>
               <input type = "text" placeholder = "Add todos"  />

           </form>
        </div>
    )
}

export default TodoList
