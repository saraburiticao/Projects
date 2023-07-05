describe('My second Test', () => {
    it('found a element', () => {
        
        cy.visit('https://www.constructoracapital.com/inicio');
        cy.get('#cerrar_popup').click();// clic a botones
        cy.get('#ico_lupa').click();//click a botones
        cy.get('#buscar_x_nombre').type('NATURE BIO');// hacer búsquedas
        cy.get('#buscar_x_nombreautocomplete-list > div > a').click();

        cy.get('#ico_lupa').click();
        cy.get('#buscar_x_nombre').type('NATURE AQUA'). clear().type('puerto sereno').clear().type('ha sido un placer;')// encadenando comandos
  
        

        
      
    }) 
  })