describe('My First Test', () => {
    it('Visits the google page', () => {
      cy.visit('https://www.google.com/');
      cy.get('.gLFyf').type('Hola Tú!!!!!!  ').clear().type('me caes biennnn mal   ').clear().type('chau');
      cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
     
    }) 
})