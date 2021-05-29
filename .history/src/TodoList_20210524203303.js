import React, {useState, createContext} from 'react'


export const taskContext = createContext(null)
function TodoList() {
 
 const [input, setInput] = useState([{
  {task: "Read", id: 1},
  {task: "Dishes", id: 2},
  {task: "HW", id: 3}
 }])
   
    
    
    return (
        <div>
         
        </div>
    )
}

export default TodoList
