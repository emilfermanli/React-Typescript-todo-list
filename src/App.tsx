import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { ITodo } from './interfaces';

const App: React.FC  = () => {
  
  const [todos,setTodos] = useState<ITodo[]>([])


  const addHandler = (title:string) => {
    const newTodo :ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
 
  setTodos(prev => [newTodo, ...prev ])
  
  }

  const handleToggle = (id: number) =>{
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const handleRemove = (id:number) => {
    
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  
  return (
    <>
    <Navbar />
    <div className="container">
      <TodoForm onAdd={addHandler } />
      <TodoList onToggle={handleToggle} onRemove={handleRemove} todoList={todos} />
    </div>
    </>
  );
}

export default App;
