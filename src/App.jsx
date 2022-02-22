import React, {Fragment, useState, useRef, useEffect} from "react";
import { TodoList } from "./components/TodoList";
import {v4 as uuidv4} from "uuid"
import './index.css'

const KEY = 'todoApp.todos'

export function App() {
    const [todos, setTodos] = useState([{id: 1, task: 'Ingrese su primer Tarea', completed: false}])
    const todoTaskRef = useRef()

    const toggleTodo = (id) => {
        const newTodos = [...todos]
        const todo = newTodos.find((todo)=> todo.id===id)
        todo.completed = !todo.completed
        setTodos(newTodos)
    }
    
    const handleAddTodo = () => {
        const task = todoTaskRef.current.value
        if(task === '') return

        setTodos((prevTodos)=> {
            return [...prevTodos, {id: uuidv4(), task, completed: false}]
        })
        todoTaskRef.current.value = null
    }

    const handleClearAll = () => {
        const newTodos = todos.filter((todo)=> !todo.completed)
        setTodos(newTodos)
    }

    useEffect(()=> {
        const storedTodos = JSON.parse(localStorage.getItem(KEY))
        if(storedTodos){
            setTodos(storedTodos)
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos])

return (
    <Fragment>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <div className="flex items-center justify-center my-3">
    <input ref={todoTaskRef} className="p-2 text-center" type="text" placeholder="Nueva Tarea" />
    <button onClick={handleAddTodo} className="mx-2"><i className="fa-solid fa-plus"></i></button>
    <button onClick={handleClearAll} className="mx-2"><i className="fa-solid fa-trash"></i></button>
    </div>
    <div>
        Te quedan {todos.filter((todo)=>!todo.completed).length} tareas por terminar
    </div>
    </Fragment>
)
}

