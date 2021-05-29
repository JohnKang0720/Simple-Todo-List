import React, {useState} from 'react'

function TodoList() {
    const [input, setinput] = useState('')
    const style = {
        display: 'inline-block'
    }
    const handleSubmit = e => {
        e.preventDefault();
       }
   const handleChange = e => {
    setinput(e.targe.value)
   }
    return (
        <div>
           <form  className = "todo-form" style = {style} onSubmit = {handleSubmit} >
               <input type = "text" placeholder = "Add todos" onChange = {handleChange} />
               <button  style = {style}> Add </button>
               <p> {input} </p>
           </form>
           
        </div>
    )
}

export default TodoList
