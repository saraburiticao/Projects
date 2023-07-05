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
// caso 1
    it("TC1: buscar películas haciendo click  en cartelera", ()=>

    {
        cy.get('.column > .nav-tabs > .nav-tab--active').click();

    })
//caso 2
    it("TC2: ir a PRONTO través del endpoint ", () =>
    {
        
        cy.visit("https://www.cinecolombia.com/medellin");
    cy.get('.nav-tabs').contains('Pronto')
    cy.get('.column > .nav-tabs > [href="/medellin/pronto"]').click();

    
    })
//caso 3

it.only("TC3: ir a comidas del dropdown ", () =>
    {
        cy.get('.hamburger > :nth-child(1)').click();
        cy.get(':nth-child(4) > .sidebar-menu__list > :nth-child(1) > a').click();
        
})
})