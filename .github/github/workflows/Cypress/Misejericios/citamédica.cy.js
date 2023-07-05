describe('ingreso a metrosalud', () => {
    it('hacer login', () => {
        
        cy.visit('http://citas.metrosalud.gov.co/');
        
        cy.get('#CmbTipoIdentificacion_Input').click();
        cy.get('#txtIdentificacion').type('1017235411');
        cy.get('#RdpFechaNacimiento_dateInput').type('11/02/1996');
       
        
        

        
      
    }) 
   
  })



