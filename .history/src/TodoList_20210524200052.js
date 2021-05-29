import React, {useState, useEffect} from 'react'

function TodoList(props) {
    const [input, setinput] = useState('')
    const style = {
        display: 'inline-block'
    }
   
   const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        todo: input
    })

   }
    
    
    return (
        <div>
           <form  className = "todo-form" style = {style} >
               <input type = "text" value = {input} placeholder = "Add todos" onChange = {(e) => setinput(e.target.value)} />
               <button  style = {style}> Add </button>
               <p> {input} </p>
           </form>
           
        </div>
    )
}

export default TodoList
