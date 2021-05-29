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
               
           </form>
           <button onClick = {onsubmit} > Add </button>
        </div>
    )
}

export default TodoList
