import React, { useEffect, useRef, useState } from 'react'
import { icons } from 'react-icons';
import { ToDo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone, MdSettingsPhone } from "react-icons/md"
import "./style.css"
import ToDoList from './ToDoList';

type Props = {
    todo: ToDo;
    todos: ToDo[];
    key: number;
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}



const SingleToDo: React.FC<Props> = ({ todo, key, todos, setToDos }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const handleDone = (id: number) => {
        setToDos(todos.map(todo => (
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setToDos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo)
        ))
        setEdit(false)
    }

    const handleDelete = (id: number) => {
        setToDos(todos.filter((todo) => todo.id !== id))
    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus
    }, [edit])
    

    return (
        <form action="" className='todosSingle' onSubmit={(e) => { handleEdit(e, todo.id) }}>

            {
                edit ? (
                    <input ref={inputRef} type="text" value={editTodo} className='todosSingleText' onChange={(e) => setEditTodo(e.target.value)} />
                ) : (

                    todo.isDone ? (
                        <s className="todosSingleText">{todo.todo}</s>) : (
                        <span className="todosSingleText">{todo.todo}</span>
                    )


                )
            }


            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                } >
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete onClick={() => handleDelete(todo.id)} />
                </span>
                <span className="icon">
                    <MdDone onClick={() => handleDone(todo.id)} />
                </span>
            </div>
        </form>
    )
}

export default SingleToDo