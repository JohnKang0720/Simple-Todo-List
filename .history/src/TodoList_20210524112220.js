import React, {useState} from 'react'

function TodoList() {
    const [input, setinput] = useState('')
    const style = {
        
    }
   
    const onsubmit = () => {
        console.log("hi")
    }
    return (
        <div>
           <form  className = "todo-form" style = {style}>
               <input type = "text" placeholder = "Add todos"  />
               <button onClick = {onsubmit} > Add </button>
           </form>
        </div>
    )
}

export default TodoList
