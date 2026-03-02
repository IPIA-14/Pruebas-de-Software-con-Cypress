describe('Ejercicio 1 - Nivel Básico', () => {

  it('Verificar página principal', () => {

    cy.visit('https://example.cypress.io/')

    // Verificar título principal
    cy.contains('Kitchen Sink').should('be.visible')

    // Verificar que el link Type exista
    cy.contains('type').should('be.visible')

  })

})