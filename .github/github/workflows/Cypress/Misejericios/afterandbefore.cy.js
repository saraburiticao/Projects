describe('AFTER AND BEFORE', () => {
    before(function(){

        cy.log("ejecutando todas las pruebas");
    })

    after(function(){
        cy.log("ejecutando las postcondiciones de las pruebas");
    })

    beforeEach(function(){

        cy.visit('https://www.youtube.com/');
    })

    afterEach(function(){
        cy.log("resetando datos");
    })


    it('EXCERCISE 1', () => {
        
        cy.get('#search-input > #search').type('shakira y karol G').clear().type('TQG shakira y karol G');
        cy.get('#search-icon-legacy > yt-icon.style-scope').click();
        cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #channel-info > #channel-name > #container > #text-container > #text > .yt-simple-endpoint').contains('KAROL G');
}) 
    it('EXCERCISE 2', () => {
        
            cy.get('#search-input > #search').type('bizarrap').clear().type('trague y mastique');
            cy.get('#search-icon-legacy > yt-icon.style-scope').click();
       
    }) 
})