import { Button } from "./Button"

export default function App () {
  return (
    
    <div className="container">
    <h1>Lista De Tarefas</h1>
      <div>
        <input type="text" placeholder="Adicionar Nova Tarefa"/>
        <Button className="btn"/>
      </div>
      <div>
        <input type="checkbox" />
      </div>
        
    </div>
  )
}