describe('Waiting...', () => {

  before(() => {
    cy.visit('http://localhost:3000')
  })

  beforeEach(() => {
    cy.reload();
  })

  it('Should wait for the element to be avaliable', () => {
    cy.get('#waiting-button').click()
    cy.get('#new_text_field').type('It works!')
  })
})