interface NewTaskButtonProps {
  onClick: () => void
}

function NewTaskButton({ onClick }: NewTaskButtonProps) {
  return (
    <button type="button" data-cy="new-task-button" className="new-task-btn" onClick={onClick}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      </svg>
      New Task
    </button>
  )
}

export default NewTaskButton
