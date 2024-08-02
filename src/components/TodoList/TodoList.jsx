
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    
    <ul className={styles.todoList}>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        index={index}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </ul>
  )
}

export default TodoList