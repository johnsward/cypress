/// <reference types="cypress" />

Cypress.Commands.add('addTodo', (text: string) => {
  cy.get('[data-cy=new-task-button]').click()
  cy.get('[data-cy=new-todo]').type(`${text}{enter}`)
})

declare global {
  namespace Cypress {
    interface Chainable {
      addTodo(text: string): Chainable<void>
    }
  }
}

export {}
