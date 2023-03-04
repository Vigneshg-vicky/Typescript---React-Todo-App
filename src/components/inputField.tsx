import React, { useRef } from 'react'
import './style.css'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent<EventTarget>) => void;
}


const inputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef= useRef<HTMLInputElement>(null)

    return <form action="" className='input' onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();
    }}>
        <input ref={inputRef} type="input" placeholder='Enter a task' className='inputBox' value={todo} onChange={(e) => { setTodo(e.target.value) }} />
        <button className='inputSubmit' type='submit'>Go</button>
    </form>
}

export default inputField