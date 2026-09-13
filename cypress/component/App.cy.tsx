import App from '../../src/App'

describe('<App />', () => {
  it('renders the seeded starter todos', () => {
    cy.mount(<App />)
    cy.get('[data-cy=todo-item]').should('have.length', 3)
    cy.get('[data-cy=todo-item].completed').should('have.length', 1)
  })

  it('adds a new todo through the New Task form', () => {
    cy.mount(<App />)
    cy.get('[data-cy=new-task-button]').click()
    cy.get('[data-cy=new-todo]').type('Buy milk{enter}')
    cy.get('[data-cy=todo-text]').should('contain', 'Buy milk')
  })

  it('moves a completed todo to the bottom of the list', () => {
    cy.mount(<App />)
    cy.get('[data-cy=todo-toggle]').first().check()
    cy.get('[data-cy=todo-item]').last().should('have.class', 'completed')
  })
})
