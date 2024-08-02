import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import style from './Todos.module.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) {
        setTodos(storedTodos);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (text) => {
      setTodos([...todos, { text, completed: false }]);
    };
  
    const toggleTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    const deleteTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };
  
    return (
      <div className={style.container}>
        <h1>To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    );
}

export default Todos