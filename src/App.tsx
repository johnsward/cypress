import { useEffect, useRef, useState } from 'react'
import './App.css'
import TodoItem, { type Todo } from './components/TodoItem'
import NewTaskButton from './components/NewTaskButton'

const initialTodos: Todo[] = [
  { id: 1, text: 'Present Cypress demo', completed: false },
  { id: 2, text: 'Write end-to-end tests', completed: false },
  { id: 3, text: 'Set up CI pipeline', completed: true },
]

const startEmpty = new URLSearchParams(window.location.search).get('seed') === 'empty'

function App() {
  const [todos, setTodos] = useState<Todo[]>(startEmpty ? [] : initialTodos)
  const [text, setText] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const nextId = useRef(initialTodos.length + 1)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isAdding) inputRef.current?.focus()
  }, [isAdding])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos([...todos, { id: nextId.current++, text: trimmed, completed: false }])
    setText('')
    setIsAdding(false)
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id === id))
  }

  const remaining = todos.filter((t) => !t.completed).length
  const sortedTodos = [...todos].sort((a, b) => Number(a.completed) - Number(b.completed))

  return (
    <div className="todo-app">
      <h1>To-Do</h1>
      <div className="toolbar">
        <NewTaskButton onClick={() => setIsAdding(true)} />
      </div>

      {isAdding && (
        <form onSubmit={addTodo} className="add-form">
          <input
            ref={inputRef}
            data-cy="new-todo"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => !text.trim() && setIsAdding(false)}
          />
        </form>
      )}

      <ul data-cy="todo-list" className={sortedTodos.length === 0 ? 'empty' : ''}>
        {sortedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
      <p data-cy="todo-count">{remaining} item(s) left</p>
    </div>
  )
}

export default App
