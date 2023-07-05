describe('validación de textos', () => 
{
   it("texto en inicio de sesión", () =>
    {
        cy.visit("https://www.cedars-sinai.org/mycslink.html");// caso 1. ir al home page
        cy.get('.h4-style > p').contains('View doctor messages, lab results, appointments, billing and more.');
    })

    it("View and Pay Bills", () =>
    {
        cy.visit("https://www.cedars-sinai.org/mycslink.html");// caso 1. ir al home page
        cy.get(':nth-child(1) > .call-out-block > .cob-content > .contentBlock > .content__copy-center > .title > .h3-style').contains('View and Pay Bills');
        cy.get(':nth-child(1) > .call-out-block > .cob-content > .contentBlock > .content__copy-center > .contentblocktext > :nth-child(1) > .content__copy > .lead > p').contains('Sign in to My CS-Link pay your bill and view your billing history.');
    })

    it.only("View and Pay Bills", () =>
    {
        cy.visit("https://www.cedars-sinai.org/mycslink.html");// caso 1. ir al home page
        cy.get('.mycslink-login-widget').type('jhonmora')
       
    
    })
    })