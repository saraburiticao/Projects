describe('Ltexto', () => 
{
   it("abrir la página para inicio de sesión", () =>
    {
        cy.visit("https://www.cedars-sinai.org/mycslink.html");// caso 1. ir al home page
        cy.get('.er8xn').type('jhonmora');
    })

    })