import React, {useState, useEffect} from 'react'

function TodoList() {
    const [input, setinput] = useState([])
    const style = {
        display: 'inline-block'
    }
   
    useEffect(() =>  if(!input.includes()){
        console.log("hi")
    }, [])
       
    
    
    return (
        <div>
           <form  className = "todo-form" style = {style} >
               <input type = "text" placeholder = "Add todos" onChange = {(e) => setinput(e.target.value)} />
               <button  style = {style}> Add </button>
               <p> {input} </p>
           </form>
           
        </div>
    )
}

export default TodoList
