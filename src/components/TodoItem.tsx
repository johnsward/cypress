import './TodoItem.css'

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
    <li data-cy="todo-item" className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        data-cy="todo-toggle"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span data-cy="todo-text" className="todo-text">
        {todo.text}
      </span>
      <button
        data-cy="todo-delete"
        className="todo-delete-btn"
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
