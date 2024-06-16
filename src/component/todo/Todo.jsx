import React, { useEffect, useState } from 'react'
import {TodoProvider} from '../../context/index'
import TodoForm from './component/TodoForm';
import TodoItem from './component/TodoItem';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos((prev)=>[...prev, {id: Date.now(), ...todo}]); //id bydefault is date.now
    }

    const updateTodo = (id, todomsg) => {
        setTodos(prev => prev.map(item => item.id === id? {...item, todo:todomsg} : item));
    }

    const removeTodo = (id) => {
        setTodos(prev => prev.filter(item => item.id!==id));
    }

    const toggleTodo = (id) => {
        setTodos(prev => prev.map(item => item.id === id? {...item, completed:!item.completed} : item));
    }

    useEffect(()=>{
        const todoval = localStorage.getItem('todos');
        if(todoval && todoval.length > 0){
            setTodos(JSON.parse(todoval));
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo,toggleTodo}}>
    <div className="bg-[#172842] max-h-screen min-w-96 py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {
                    todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </TodoProvider>
  )
}


