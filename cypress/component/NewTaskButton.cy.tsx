import NewTaskButton from '../../src/components/NewTaskButton/NewTaskButton'

describe('<NewTaskButton />', () => {
  it('renders the "New Task" label', () => {
    cy.mount(<NewTaskButton onClick={cy.stub()} />)
    cy.get('[data-cy=new-task-button]').should('contain.text', 'New Task')
  })

  it('calls onClick when clicked', () => {
    const onClick = cy.stub().as('onClick')
    cy.mount(<NewTaskButton onClick={onClick} />)
    cy.get('[data-cy=new-task-button]').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })
})
