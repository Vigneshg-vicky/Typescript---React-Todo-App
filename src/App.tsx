import { useState } from 'react'
import './App.css'
import InputField from './components/inputField'
import ToDoList from './components/ToDoList'
import { ToDo } from './model'

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [ToDos, setToDos] = useState<ToDo[]>([])


  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (toDo) {
      setToDos([...ToDos, { id: Date.now(), todo: toDo, isDone: false }]);
      setToDo('');
    }
  };
  console.log(ToDos)

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={toDo} setTodo={setToDo} handleAdd={handleAdd} />
      <ToDoList todos={ToDos} setToDos={setToDos} />
    </div>
  )
}

export default App