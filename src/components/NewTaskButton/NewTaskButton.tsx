
import styles from "./NewTaskButton.module.css"

interface NewTaskButtonProps {
  onClick: () => void
}

function NewTaskButton({ onClick }: NewTaskButtonProps) {
  return (
    <button type="button" data-cy="new-task-button" className={styles.newTaskButton} onClick={onClick}>
      New Task
    </button>
  )
}

export default NewTaskButton
