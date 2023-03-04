import React from 'react'
import { ToDo } from '../model'
import SingleToDo from './SingleToDo'
import "./style.css"

interface Props {
    todos: ToDo[],
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList: React.FC<Props> = ({ todos, setToDos }) => {
    return (
        <div className='todos'>
            {todos.map(todo => (
                <SingleToDo
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setToDos={setToDos}
                />
            ))}
        </div>
    )
}

export default ToDoList