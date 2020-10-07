/// <reference types="cypress" />

describe('Helpers', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  beforeEach(() => {
    cy.reload();
  })
  it('Wrap basic', () => {
    const obj = { name: 'User', age: 20}
    expect(obj).to.have.property('name', 'User')
    expect(obj).to.have.property('age', 20)
    cy.wrap(obj).should('have.property', 'name')
  })

  it('Wrap then', () => {
    cy.get('#formFirstName').type('funciona?').should('have.value', 'funciona?')
    cy.get('#formFirstName').then(element => {
      cy.wrap(element).type('mesmo?').should('have.value', 'funciona?mesmo?')
    })
  })

  it('Wrap Promises', () => {
    const promise = new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(10)
      }, 2000);
    })

    cy.get('#buttonBasic').then(() => console.log('First button found'))
    cy.wrap(promise).then(ret => console.log(ret))
    cy.get('#wait-button').then(() => console.log('Second button found'))
  })

  it('Wrap vs should', () => {
    cy.wrap(1).then(() => {
      return 2
    }).should('be.equal', 2)

    cy.wrap(1).should(() => {
      return 2
    }).should('be.equal', 1)
  })
})