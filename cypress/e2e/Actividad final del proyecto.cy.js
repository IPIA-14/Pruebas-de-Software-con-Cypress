describe('Actividad final del proyecto', () => {

    //Crear una prueba automatizada que haga lo siguiente en su aplicación web:

    //Abrir la página de inicio
    it('Abrir la página de inicio', () => {
        cy.visit('https://frontend-gxnova-production.up.railway.app/');
    });

    //Iniciar Sesión
    it('Iniciar Sesión', () => {
        cy.visit('https://frontend-gxnova-production.up.railway.app/')
        cy.contains('Iniciar Sesión').click();
        cy.get('#login-correo').clear().type('ana@worker.com')
        cy.get('#login-password').clear().type('password123')

        cy.contains('button', 'Iniciar Sesión').click()
    });
    
});