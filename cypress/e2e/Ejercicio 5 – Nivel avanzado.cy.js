describe('Ejercicio 5 - Nivel avanzado', () => {

    it("inicio sesion", () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('admin@test.com')
        cy.get('#password1').type('password123')
        cy.get('.action-form').submit()
        cy.contains('Your form has been submitted!').should('be.visible')

        cy.contains('Querying').click({ force: true })
        cy.url().should('include', '/commands/querying')

        cy.get('.navbar-brand').click()

        cy.url().should('eq', 'https://example.cypress.io/')
        cy.contains('Kitchen Sink').should('be.visible')
    })

});