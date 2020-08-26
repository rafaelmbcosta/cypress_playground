/// <reference types="cypress" />

describe('Text Elements', () => {
  it('find text', () => {
    cy.visit('http://localhost:3000')

    cy.get('body').should('contain', 'PLAYGROUND')
    cy.get('h1').should('contain', 'PLAYGROUND')
    cy.get('.playground-title').should('have.text', 'CYPRESS PLAYGROUND')
  })
})