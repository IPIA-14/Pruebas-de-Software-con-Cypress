describe('Ejercicio 4 - Nivel avanzado', () => {

    // ir al modulo Form
    it('Ir al modulo Form', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
        cy.get('.action-form').scrollIntoView().should('be.visible');
    });

    //Llenar los campos (nombre, correo, comentario).
    it('Llenar los campos (nombre, correo, comentario).', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
        cy.get('.action-form').scrollIntoView().should('be.visible');
        cy.get('#fullName1').type('Juan');
        cy.get('#email1').type('juan@example.com');
        cy.get('#description').type('Esto es un ejemplo de comentario');
    });

    //Enviar el formulario.
    it('Enviar el formulario.', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
        cy.get('.action-form').scrollIntoView().should('be.visible');
        cy.get('#fullName1').type('Juan');
        cy.get('#email1').type('juan@example.com');
        cy.get('#description').type('Esto es un ejemplo de comentario');
        cy.get('.action-form').click();
    });

    //Validar un mensaje de éxito.
    it('Validar un mensaje de éxito.', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
        cy.get('.action-form').scrollIntoView().should('be.visible');
        cy.get('#fullName1').type('Juan');
        cy.get('#email1').type('juan@example.com');
        cy.get('#description').type('Esto es un ejemplo de comentario');
        cy.get('.action-form').click();
        cy.contains('Your form has been submitted!').should('be.visible');
    });

});