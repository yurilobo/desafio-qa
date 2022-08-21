describe('Adicionando produto no Carrinho no site da Amazon', function() {
    it('Acessando o site da Amazon', function() {
        cy.amazon()
        //verificar se estou no site da amazon
    })
    it('busco por um produto', function(){
        cy.get('#twotabsearchtextbox')
            .type('agile testing')
        cy.get('#nav-search-submit-button')
            .click()
    })

  })