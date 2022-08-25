describe('Realizando cadastro no site da Amazon', function () {
    it('Acessando o site da Amazon', function () {
        cy.amazon()
    })
    
    it('Acesse a página para criar uma nova conta', function () {
        cy.get('.nav-signin-tooltip-footer > .nav-a').click()
        
    })
    it('Preenchendo os campos', function () {
        cy.get('#ap_customer_name').should('be.visible').type("Teste da Avenue")
        cy.get('#ap_email').should('be.visible').type("avenue@teste.com.br")
        cy.get('#ap_password').should('be.visible').type("12345678",{ log: false })
        cy.get('#ap_password_check').should('be.visible').type("12345678",{ log: false })
        cy.get('#continue').should('be.visible')

    })

})