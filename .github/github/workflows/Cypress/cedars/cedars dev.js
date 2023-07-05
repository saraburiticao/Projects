describe('Cedars Sinai - menú', () => 
{

    beforeEach(function(){

        cy.wait(3000);
    })
 
    it("abrir la página principal",() =>
    {
        cy.visit("https://www.cedars-sinai.org/");// caso 1. ir al home page
    })
})