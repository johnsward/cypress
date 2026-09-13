import { PlusIcon } from "lucide-react"
import "./NewTaskButton.css"

interface NewTaskButtonProps {
  onClick: () => void
}

function NewTaskButton({ onClick }: NewTaskButtonProps) {
  return (
    <button type="button" data-cy="new-task-button" className="new-task-btn" onClick={onClick}>
      <PlusIcon />
      New Task
    </button>
  )
}

export default NewTaskButton
