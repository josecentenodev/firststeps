import React from 'react'

export function TodoItem({todo, toggleTodo}) {
    const {id, task, completed} = todo

    const handleTodoClick = () => {
        toggleTodo(id);
    }

  return (
    <li className='flex my-2 justify-center items-center text-lg font-bold font-sans'>
    <input className='mx-2' checked={completed} type="checkbox" onChange={handleTodoClick}/>
    {task}
    </li>
  )
}
