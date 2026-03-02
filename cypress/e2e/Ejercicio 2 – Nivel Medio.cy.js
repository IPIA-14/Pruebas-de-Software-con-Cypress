describe('Nivel Medio', () => {
    // Ingresar a la opción “Type”.
    it('Ingresar a la opción “Type”.', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
    });

    // Escribir su nombre en el input.
    it('Escribir su nombre en el input.', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
        cy.get('#fullName1').type('Juan');
    });

    // Verificar que el texto ingresado sea correcto.
    it('Verificar que el texto ingresado sea correcto.', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
        cy.get('#fullName1').type('Juan');
        cy.get('#fullName1').should('have.value', 'Juan');
        
    });

});