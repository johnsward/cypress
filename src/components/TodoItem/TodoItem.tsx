import styles from './TodoItem.module.css'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      data-cy="todo-item"
      data-completed={todo.completed}
      className={`${styles.todoItem}${todo.completed ? ` ${styles.completed}` : ''}`}
    >
      <input
        type="checkbox"
        data-cy="todo-toggle"
        className={styles.todoCheckbox}
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span data-cy="todo-text" className={styles.todoText}>
        {todo.text}
      </span>
      <button
        data-cy="todo-delete"
        className={styles.todoDeleteBtn}
        aria-label="Delete todo"
        onClick={() => onDelete(todo.id)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path
            d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  )
}

export default TodoItem
