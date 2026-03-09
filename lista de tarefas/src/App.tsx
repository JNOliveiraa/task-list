import "./App.css"

import { Button } from "./Button"
import { useState, useEffect } from "react"

type Task = {
  text: string
  completed: boolean
}

export default function App () {

  const [input, setInput] = useState("") 
  const [tasks, setTasks] = useState <Task[]>(() =>{
    const savedTasks =  localStorage.getItem("tasks")
    return savedTasks? JSON.parse(savedTasks) : []
  })

  useEffect (() => {
     const savedTasks = localStorage.getItem("tasks")

     if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
     }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function handleAddTask() {
    if (input.trim() === "") return 

    setTasks([...tasks, {text: input, completed: false}])
    setInput("")
  }

  function handleDeleteTask(indexToDelete: number) {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete)
    setTasks(newTasks)
  }

  function toggleTask(index: number) {
    const updatedTasks = tasks.map((task, i) => 
    i === index? {...task, completed: !task.completed} : task
  )
  setTasks(updatedTasks)
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
              <span className= {task.completed? "completed" : ""}>{task.text}</span>
            
            
              <button className="delete" onClick={() => handleDeleteTask(index)}>🗑️</button>
              
              <input 
                className="check" 
                type="checkbox"
                checked = {task.completed}
                onChange={() => toggleTask(index)}
              />
            </div>
          ))}
      </div>
          
    </div>
  )
}