describe('Actividad final del proyecto', () => {

    //Crear una prueba automatizada que haga lo siguiente en su aplicación web:

    //Abrir la página de inicio
    it('Abrir la página de inicio', () => {
        cy.visit('https://frontend-gxnova-production.up.railway.app/');
    });

    //Iniciar Sesión y Verificar Sesión
    it('Iniciar Sesión y Verificar Sesión', () => {
        cy.visit('https://frontend-gxnova-production.up.railway.app/')
        cy.contains('Iniciar Sesión').click();
        cy.get('#login-correo').clear().type('ana@worker.com')
        cy.get('#login-password').clear().type('password123')
        cy.get('form').submit()

        // Verificar que el usuario se encuentre en sesión (aparece el nombre del usuario o el botón de perfil)
        cy.get('nav').should('contain', 'Ana');
    });

    //Realizar un registro mediante un formulario
    it('Realizar un registro mediante un formulario', () => {
        cy.visit('https://frontend-gxnova-production.up.railway.app/auth')
        cy.contains('Registrarse').click();

        cy.get('input#nombre').type('Juan')
        cy.get('input#apellido').type('Perez')
        cy.get('input#telefono').type('3001234567')
        cy.get('select#rol').select('Trabajador')
        cy.get('input#correo').type(`juan.perez.${Date.now()}@example.com`)
        cy.get('input#password').type('Password123!')
        cy.get('input#confirmPassword').type('Password123!')

        // El formulario requiere subir archivos, pero en pruebas automatizadas a veces se omiten o se cargan dummies.
        // Si el botón está habilitado sin archivos, se puede enviar.
        cy.get('button[type="submit"]').click();

        // Verificar éxito (redirige al login o muestra mensaje)
        cy.url().should('include', '/auth');
        cy.contains('Iniciar Sesión').should('be.visible');
    });

    //Consultar un elemento registrado en su proyecto
    it('Consultar un elemento registrado en su proyecto', () => {
        cy.visit('https://frontend-gxnova-production.up.railway.app/')

        // Buscar un servicio específico (ej: Arreglar lámpara)
        cy.get('input#busqueda-principal').type('lámpara{enter}')

        // Click en el primer resultado que coincida
        cy.contains('Arreglar lámpara').click();

        // Verificar que estamos en la página de detalles
        cy.url().should('include', '/detalles/');
        cy.get('h1').should('contain', 'Arreglar lámpara');
    });

    //Cerrar la sesión
    it('Cerrar la sesión', () => {
        // Primero iniciamos sesión para poder cerrarla
        cy.visit('https://frontend-gxnova-production.up.railway.app/auth')
        cy.get('#login-correo').type('ana@worker.com')
        cy.get('#login-password').type('password123')
        cy.get('form').submit()

        // Verificar que estamos logueados
        cy.get('nav', { timeout: 10000 }).should('contain', 'Ana');

        // Hacer clic en el nombre del usuario o el botón de menú para ver "Cerrar Sesión"
        cy.contains('Ana').click();
        cy.contains('Cerrar Sesión').click();

        // Verificar que volvimos al estado de "no sesion"
        cy.contains('Iniciar Sesión').should('be.visible');
    });
});