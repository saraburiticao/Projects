describe('Cedars Sinai - Find specialties', () => 
{

    beforeEach(function(){
        
        cy.viewport(1290, 750) // Set viewport desktop to 1290px x 750px
        cy.wait(3000);
        cy.visit("https://aem-dispatcher-dev.cedars-sinai.org/");
    })

    it("elegir el servicio de cuidados especiales",() =>
    {
       
        cy.get('[href="https://www.cedars-sinai.org/programs.html"]').click();
        cy.get('[href="https://www.cedars-sinai.org/programs.html"]').contains('Specialties')
        cy.get(':nth-child(2) > .main__grid > [href="/programs/primary-care.html"]').contains('Primary Care').click();
    //abrir primary care
    })

it("encontrar atención pediátrica primaria", () =>
{
    cy.get('[href="https://www.cedars-sinai.org/programs.html"]').click();
    cy.get('[href="https://www.cedars-sinai.org/programs.html"]').contains('Specialties')
    cy.get(':nth-child(2) > .main__grid > [href="/programs/primary-care.html"]').contains('Primary Care').click();
    cy.visit("https://aem-dispatcher-dev.cedars-sinai.org/programs/primary-care/locations.html");
cy.visit("https://aem-dispatcher-dev.cedars-sinai.org/programs/primary-care/pediatric.html");
//Pediatric Primary Care

})

it("más información atención pediátrica primaria", () =>
{
    cy.get('[href="https://www.cedars-sinai.org/programs.html"]').click();
    cy.get('[href="https://www.cedars-sinai.org/programs.html"]').contains('Specialties')
    cy.visit("https://aem-dispatcher-dev.cedars-sinai.org/programs/pediatrics/specialties/primary-care/what-to-expect-when-you-visit-your-pediatrician.html");
    // more information
})
})