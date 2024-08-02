import styles from './TodoItem.module.css';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
    <span onClick={() => toggleTodo(index)}>{todo.text}</span>
    <button onClick={() => deleteTodo(index)}>Delete</button>
  </li>
  )
}

export default TodoItem