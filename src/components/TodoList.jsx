import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({todos, toggleTodo}) {
  return (
    <ul className="bg-blue-200 p-3">
        {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))}
    </ul>
  )
}
