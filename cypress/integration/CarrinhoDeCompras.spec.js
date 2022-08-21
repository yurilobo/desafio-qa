describe('Adicionando produto no Carrinho no site da Amazon', function() {
    it('Acessando o site da Amazon', function() {
        cy.amazon()
        //verificar se estou no site da amazon
    })
    it('Buscando por um produto', function(){
        cy.get('#twotabsearchtextbox')
            .click()
            .type('codigo limpo {enter}', {force:true})
            cy.get('[data-asin="8576082675"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section').click(

            )
        //melhorar performace
        //validar item 
    })
    it('Verificando se posso adicionar ao carrinho', function() {
        cy.get('#add-to-cart-button').should('have.value', 'Adicionar ao carrinho')
        cy.get('#add-to-cart-button')
    })
    it.skip('Valide se o produto foi incluído no carrinho com sucesso', function() {
        cy.get('.a-size-medium-plus').should('have.value', 'Adicionar ao carrinho')
        cy.get('#sw-subtotal')//variavel valor do produto

    })
   

  })
  describe('Adicionando 3 produtos no Carrinho no site da Amazon', function() {
    it('Acessando o site da Amazon', function() {
        cy.amazon()
        //verificar se estou no site da amazon
    })
    it.skip('Buscando por 3 produtos', function() {
       
    })
    it.skip('Adicionndo 3 produtos no carrinho', function() {
       
    })
    it.skip('Validando o valor total no carrinho', function() {
       
    })
   

  })