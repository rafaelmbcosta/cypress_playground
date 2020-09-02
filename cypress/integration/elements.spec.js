/// <reference types="cypress" />
const delay = { delay: 100 }
describe('Text Elements', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  beforeEach(() => {
    cy.reload();
  })
  it('find text', () => {
    cy.get('body').should('contain', 'PLAYGROUND')
    cy.get('h1').should('contain', 'PLAYGROUND')
    cy.get('.playground-title').should('have.text', 'CYPRESS PLAYGROUND')
  })

  it('links', () => {
    cy.get("#cy-back-text").should('have.not.text', "I'm Back !")
    cy.get('a').click()
    cy.get("#cy-back-text").should('have.text', "I'm Back !")
  })

  it('text fields', () => {
    const text = 'Cypress Test';
    cy.get('#formFirstName').type(text, delay)
    cy.get('#formFirstName').should('have.value', text)
  })

  it('text areas', () => {
    const text = 'asdasdasdasd'
    cy.get('#formDescription').type(text, delay)
    cy.get('#formDescription').should('have.value', text)
  })

  it('keyboard inputs', () => {
    cy.get('#formLastName')
      .clear()
      .type('Wrong{selectall}Right', delay)
      .should('have.value', 'Right')
  })
})