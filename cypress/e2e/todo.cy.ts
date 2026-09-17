describe('Todo app', () => {
  it('loads with a few starter todos', () => {
    cy.visit('/')
    cy.get('[data-cy=todo-item]').should('have.length', 3)
    cy.get('[data-cy=todo-text]').should('contain', 'Present Cypress demo')
    cy.get('[data-cy=todo-item][data-completed=true]').should('have.length', 1)
  })

  describe('with an empty list', () => {
    beforeEach(() => {
      cy.visit('/?seed=empty')
    })

    it('starts empty', () => {
      cy.get('[data-cy=todo-item]').should('not.exist')
      cy.get('[data-cy=todo-count]').should('contain', '0 item(s) left')
    })

    it('adds a new todo', () => {
      cy.addTodo('Buy milk')
      cy.get('[data-cy=todo-item]').should('have.length', 1)
      cy.get('[data-cy=todo-text]').should('have.text', 'Buy milk')
      cy.get('[data-cy=todo-count]').should('contain', '1 item(s) left')
    })

    it('does not add an empty todo', () => {
      cy.get('[data-cy=new-task-button]').click()
      cy.get('[data-cy=new-todo]').type('   {enter}')
      cy.get('[data-cy=todo-item]').should('not.exist')
    })

    it('toggles a todo as completed', () => {
      cy.addTodo('Buy milk')
      cy.get('[data-cy=todo-toggle]').check()
      cy.get('[data-cy=todo-item]').should('have.attr', 'data-completed', 'true')
      cy.get('[data-cy=todo-count]').should('contain', '0 item(s) left')
    })

    it('deletes a todo', () => {
      cy.addTodo('Buy milk')
      cy.get('[data-cy=todo-delete]').click()
      cy.get('[data-cy=todo-item]').should('not.exist')
    })

    it('tracks multiple todos independently', () => {
      cy.addTodo('Buy milk')
      cy.addTodo('Walk the dog')
      cy.get('[data-cy=todo-item]').should('have.length', 2)

      cy.get('[data-cy=todo-toggle]').first().check()
      cy.get('[data-cy=todo-count]').should('contain', '1 item(s) left')
    })

    it('moves a completed todo to the bottom of the list', () => {
      cy.addTodo('Buy milk')
      cy.addTodo('Walk the dog')
      cy.get('[data-cy=todo-toggle]').first().check()

      cy.get('[data-cy=todo-text]').eq(0).should('have.text', 'Walk the dog')
      cy.get('[data-cy=todo-text]').eq(1).should('have.text', 'Buy milk')
    })
  })
})
