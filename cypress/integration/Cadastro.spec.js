describe('Realizando cadastro no site da Amazon', function() {
    it('Acessando o site da Amazon', function() {
        cy.amazon()
        //verificar se estou no site da amazon
    })
    it('Indo para parte de login', function() {
        cy.get('.nav-signin-tooltip-footer > .nav-a').click()
        //verificar se estou no site da amazon
    })
    it('Preenchendo os campos', function() {
        cy.get('#ap_customer_name').type("Teste da Avenue")
        cy.get('#ap_email').type("avenue@teste.com.br")
        cy.get('#ap_password').type("12345678")
        cy.get('#ap_password_check').type("12345678")
        cy.get('#continue')
    })

  })