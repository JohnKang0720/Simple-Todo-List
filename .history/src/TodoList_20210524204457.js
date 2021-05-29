import React, {useState, createContext} from 'react'
import Todoform from './Todoform'

export const taskContext = createContext(null)
const TodoList = () => {
 
 const [input, setInput] = useState([
  {task: "Read", id: 1},
  {task: "Dishes", id: 2},
  {task: "HW", id: 3}
 ])

 return(
    <taskContext.Provider value = {input}>
   <Todoform/>
    </taskContext.Provider>
 )
}

export default TodoList
