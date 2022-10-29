import * as cypress from "cypress";

Cypress.Commands.add('openSection', (optionSection: string): void => {
    cy.get('#navbarDropdownMenuLink').click()
    cy.get('.dropdown-item'+`:contains(${optionSection.toLowerCase()})`).click({ force: true })
    cy.get('.display-4').should('contain.text', optionSection.toLowerCase())
})

declare global {
  namespace Cypress {
    interface Chainable {
      openSection(openSection: string): void
    }
  }
}