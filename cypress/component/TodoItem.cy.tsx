import TodoItem from '../../src/components/TodoItem'

describe('<TodoItem />', () => {
  const todo = { id: 1, text: 'Buy milk', completed: false }

  it('renders the todo text unchecked', () => {
    cy.mount(<TodoItem todo={todo} onToggle={cy.stub()} onDelete={cy.stub()} />)
    cy.get('[data-cy=todo-text]').should('have.text', 'Buy milk')
    cy.get('[data-cy=todo-toggle]').should('not.be.checked')
    cy.get('[data-cy=todo-item]').should('not.have.class', 'completed')
  })

  it('renders a completed todo with strikethrough styling', () => {
    cy.mount(<TodoItem todo={{ ...todo, completed: true }} onToggle={cy.stub()} onDelete={cy.stub()} />)
    cy.get('[data-cy=todo-toggle]').should('be.checked')
    cy.get('[data-cy=todo-item]').should('have.class', 'completed')
  })

  it('calls onToggle with the todo id when the checkbox is clicked', () => {
    const onToggle = cy.stub().as('onToggle')
    cy.mount(<TodoItem todo={todo} onToggle={onToggle} onDelete={cy.stub()} />)
    cy.get('[data-cy=todo-toggle]').click()
    cy.get('@onToggle').should('have.been.calledOnceWith', 1)
  })

  it('calls onDelete with the todo id when the trash icon is clicked', () => {
    const onDelete = cy.stub().as('onDelete')
    cy.mount(<TodoItem todo={todo} onToggle={cy.stub()} onDelete={onDelete} />)
    cy.get('[data-cy=todo-delete]').click()
    cy.get('@onDelete').should('have.been.calledOnceWith', 1)
  })
})
