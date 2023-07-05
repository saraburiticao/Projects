describe('Cedars Sinai - menú', () => 
{

    beforeEach(function(){

        cy.wait(3000);
    })
 
    it("IDIOMA AMHÁRICO",() =>
    {
    cy.visit('https://translate.google.com/?hl=es');// caso 1. ir al home page
    cy.get('.aCQag > .kHGNJd > .zXU7Rb > .EO28P > :nth-child(2) > .VfPpkd-Bz112c-LgbsSe > .VfPpkd-Bz112c-RLmnJb').click();
    cy.get('.aCQag > .kHGNJd > :nth-child(2) > .bvzp8c > .OoYv6d > .pEyuac > .MeCBDd > .vSUSRc > [jsname="rPx1uf"] > [data-language-code="am"] > .Llmcnf').click();

})
it.only("IDIOMA GUARANÍ",() =>
{
cy.visit('https://translate.google.com/?hl=es');// caso 1. ir al home page
cy.get('.aCQag > .kHGNJd > .zXU7Rb > .EO28P > :nth-child(2) > .VfPpkd-Bz112c-LgbsSe > .VfPpkd-Bz112c-RLmnJb').click();
cy.get('.aCQag > .kHGNJd > :nth-child(2) > .bvzp8c > .OoYv6d > .pEyuac > .MeCBDd > .vSUSRc > [jsname="rPx1uf"] > [data-language-code="gn"]').click();
cy.get('.aCQag > .kHGNJd > .zXU7Rb > .EO28P > :nth-child(2) > .VfPpkd-Bz112c-LgbsSe > .VfPpkd-Bz112c-RLmnJb').click();
cy.get('.er8xn').type('jHola, muy buenops días mi gente bella');



})
})

