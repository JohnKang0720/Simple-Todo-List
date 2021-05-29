import React, {useState} from 'react'

function TodoList() {
    const [input, setinput] = useState('')
    const style = {
        
    }

    return (
        <div>
           <form  className = "todo-form" style = {style}>
               <input type = "text" placeholder = "Add todos"  />
               <button > Add </button>
           </form>
        </div>
    )
}

export default TodoList
