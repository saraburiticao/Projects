describe('LOGIN en una página', () => 
{
    
    it("precondición: admmin debe hacer login",() =>
    {
        cy.visit("https://www.facebook.com/");
        cy.url().should('contain',"facebook");//iniciar sesión
        cy.get('[data-testid="royal_email"]').type('nancysov2@gmail.com');
        cy.get('[data-testid="royal_pass"]').type('amordeantes');
        cy.get('[data-testid="royal_login_button"]').click();


    })
})





describe('LOGIN en una página', () => 
{
    

    beforeEach("precondición: admmin debe hacer login",() =>
    {
    
        cy.visit("https://www.cinecolombia.com/medellin");
        cy.get('.delete').click();
        cy.get('.v-modal-card-actions > .button').click();
        cy.get('.account-dropdown-button > :nth-child(2)').click();
        cy.get('#username').type('saracarolina96@hotmail.com');
        cy.get('#password').type('sara10172');
        cy.get('.has-text-centered > div > .button').click();
        cy.get('.account-dropdown-button > :nth-child(2)').click();
       
    })

    it("TC1: buscar películas haciendo click  en cartelera", ()=>

    {
        cy.get('.column > .nav-tabs > .nav-tab--active').click();

    })

    it("TC2: ir a PRONTO través del endpoint ", () =>
    {
        
        cy.visit("https://www.cinecolombia.com/medellin");
    cy.get('.nav-tabs').contains('Pronto').click();
    
    })

    it("TC3: ir a comidas del dropdown ", () =>
    {
        
        cy.visit("https://www.cinecolombia.com/medellin");
    cy.get('.hamburger').contains('COMIDAS');
    cy.get('.sidebar-menu').contains('MENÚ').click()
        
    })

})
