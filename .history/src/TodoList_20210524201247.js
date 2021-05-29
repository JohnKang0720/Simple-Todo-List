import React, {useState, useEffect} from 'react'

function TodoList() {
 const [input, setinput] = useState('')
   
    
    
    return (
        <div>
           <form >
               <input type = "text"  onChange = {e => setinput(e.target.value)} />
               <button> Add Todos </button>
               <p> {input}</p>
           </form>   
        </div>
    )
}

export default TodoList
