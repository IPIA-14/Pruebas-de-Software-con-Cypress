describe('Ejercicio 3 - Nivel medio', () => {
    // Ir a “Checkboxes”.
    it('Ir a “Checkboxes”.', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('a', 'type').click();
        cy.get('.action-checkboxes').scrollIntoView().should('be.visible');

    });

    // Seleccionar todos los checkbox.
    it('Seleccionar todos los checkbox.', () => {
        cy.visit('https://example.cypress.io');
        cy.get('.home-list').contains('Actions').click()
        cy.get('.well [type="checkbox"]')
            .check({ force: true })
            .should('be.checked')
    });
});