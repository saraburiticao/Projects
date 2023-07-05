describe// sirve para nombrar un grupo de test que estén dentro de un bloque
describe('My First Test', () => {
    it// sirve para nombrar a cada uno de los test case
    it('Does not do much!', () => {
        expect// es una palabra sacada de una librería chai, la cual nos dar test assertions que significa que un valor esperado puede hacer o no match con un valor actual.
      expect(true).to.equal(true)
    })
  })

  
  describe('My First Test', () => {
    it('Visits the google page', () => {
      cy.visit('https://www.google.com/');
      cy.get('.gLFyf').type('noticias de hoy');
      cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
      
    }) 
  })
  describe('My First Test', () => {
    it('found a element', () => {
      cy.visit('https://www.constructoracapital.com/inicio');
      cy.visit('https://www.constructoracapital.com/proyecto/1/medellin-y-alrededores/sabaneta/197/nature-bio?utm_source=google&utm_medium=search-pago&utm_campaign=nature-bio&utm_term=nature%20bio&utm_campaign=2022+-+Nature+Bio+-+Medell%C3%ADn+-+No+vis+-+Search&utm_source=adwords&utm_medium=ppc&hsa_acc=1718328752&hsa_cam=16460793007&hsa_grp=133552801589&hsa_ad=585541777425&hsa_src=g&hsa_tgt=kwd-392191057585&hsa_kw=nature%20bio&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw3K2XBhAzEiwAmmgrAg4og_50I5q5PR10-lWPBC-eYpaQr-hvGyaTMb-gn3aXl2r5ybiHaxoCwjcQAvD_BwE');
      cy.get('.row.row_x1').type('hola');
      cy.get('#ico_lupa').type('hola');
      
    }) 
  })

  