describe('Cedars Sinai - menú', () => 
{

    beforeEach(function(){

        cy.wait(3000);
    })
 
    it("abrir la página principal",() =>
    {
        cy.visit("https://www.cedars-sinai.org/");// caso 1. ir al home page
        
        cy.get('.utility__menu-btn').click(); // caso 1. abrir el menú de opciones
       
        cy.get(':nth-child(2) > .main__link').click();//encontrar un doctor desde el dropdown
        
        cy.get('.utility__menu-btn').click();
       
        cy.get('.main__nav > :nth-child(3) > [data-dm-category="header container"]').click(); // encontrar sitios de atención 
       
        cy.get('.utility__menu-btn').click();
       
        cy.get(':nth-child(4) > [href="https://www.cedars-sinai.org/programs.html"]').click();//encontrar especialistas   
      
        cy.visit('https://www.cedars-sinai.org/billing-insurance.html'); //URL billing insurance
        
        cy.get('.utility__menu-btn').click();
       
        cy.get(':nth-child(6) > .main__link').click();// login
       
    
        




})
})