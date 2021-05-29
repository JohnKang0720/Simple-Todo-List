import React, {useState} from 'react'

function TodoList() {
    const [input, setinput] = useState('')
    const style = {
        display: 'inline-block'
    }
   
   const handleSubmit = e => {
    console.log(e.targe.value)
   }
    return (
        <div>
           <form  className = "todo-form" style = {style} >
               <input type = "text" placeholder = "Add todos" onChange = {handleSubmit} />
               <button  style = {style}> Add </button>
           </form>
           
        </div>
    )
}

export default TodoList
