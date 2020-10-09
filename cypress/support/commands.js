Cypress.Commands.add("clickAlert", (locator, message) => {
  cy.get(locator).click()
  cy.on('window:alert', msg => {
    expect(msg).to.be.equal(message)
  })
})

Cypress.Commands.add("visitServer", (locator, message) => {
  cy.visit('http://localhost:3000')
})
