import * as cypress from "cypress";

const optionSection = 'Cypress-And-Playwright'

describe('Check Vertocode blog', () => {
  beforeEach(() => {
    cy.visit('https://blog.vertocode.com/#/')
  })
  it(`Open the ${optionSection} section in the sections option menu.`, () => {
    // @ts-ignore
    cy.openSection(optionSection)
  })
  it('Compare title of the Cypress VS Playwright of list with the page title.', () => {
    // @ts-ignore
    cy.openSection(optionSection)

    cy.get('[data-test="title-item"]').first().then($element => {
      cy.wrap($element).click()
      cy.get('h1').should('contain.text', $element.text())
    })
  })
  it('Check element in the list by index.', () => {
    const secondItem = () => cy.get('[data-test="title-item"]').eq(1)
    secondItem().should('be.visible')
  })
})