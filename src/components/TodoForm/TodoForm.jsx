import { useState } from "react";
import styles from './TodoForm.module.css'

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (input.trim()) {
        addTodo(input);
        setInput('');
      }
    };
  
    return (
      <form className={styles.addTodo} onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
    );
}

export default TodoForm