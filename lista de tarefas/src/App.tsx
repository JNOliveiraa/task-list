import "./App.css"

import { Button } from "./Button"
import { useState } from "react"

export default function App () {

  const [input, setInput] = useState("") 
  const [tasks, setTasks] = useState <string[]>([])

  function handleAddTask() {
    if (input.trim() === "") return 

    setTasks([...tasks, input])
    setInput("")
  }

  function handleDeleteTask(indexToDelete: number) {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete)
    setTasks(newTasks)
  }


  return (

    <div className="container">
    <h1>Lista De Tarefas</h1>
     
      <div className="input-area">

        <input 
          type="text" 
          placeholder=" Adicionar Nova Tarefa"
          value = {input}
          onChange={(e) => setInput(e.target.value)}
          />
            
        
          <Button className="add" onClick={handleAddTask}/>
        
    
        
      </div>

      <div className="tasks">
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <span>{task}</span>
            
            
              <button className="delete" onClick={() => handleDeleteTask(index)}>🗑️</button>   
              <input className="check" type="checkbox" />
            </div>
          ))}
      </div>
          
    </div>
  )
}