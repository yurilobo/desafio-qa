describe('Adicionando produto no Carrinho no site da Amazon', function() {
    it('Acessando o site da Amazon', function() {
        cy.amazon()
        
    })
    it('Buscando por um produto e adicionando ao carrinho', function(){
        cy.get('#twotabsearchtextbox')
            .type('codigo limpo {enter}', {force:true})
            cy.get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section')
            .first()
            .click()
            .get('#add-to-cart-button')
            .click()
            .get('#sw-gtc > .a-button-inner > .a-button-text').click()
        
    })
    
    it('Valide se o produto foi incluído no carrinho com sucesso', function() {
        cy.get('.a-color-base > .a-truncate > .a-truncate-cut').should('contains.text','Código limpo: Habilidades práticas do Agile Software')
      
        //.should('contains.text','R$ 71,88')
        
    })
    it.skip('Valide o valor do pedido', function() {
        cy.get('#sc-subtotal-amount-buybox > .a-size-medium').invoke('text').should('contains.text','71,88')
        
    })
   
  })
  describe('Adicionando 3 produtos no Carrinho no site da Amazon', function() {
    it('Acessando o site da Amazon', function() {
        cy.amazon()
        cy.get('[href="/gp/browse.html?node=17877554011&ref_=nav_cs_sell"]')
        .should('contains.text', 'Venda na Amazon')
    })
    it('Buscando e adicionando 3 produtos', function() {
        cy.get('#twotabsearchtextbox')
            .type('codigo limpo {enter}', {force:true})
            cy.get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section')
            .first()
            .click()
            .get('#quantity').select('3').should('have.value', '3')    
            .get('#add-to-cart-button')
            .click()
            .get('#sw-gtc > .a-button-inner > .a-button-text').click()
        
    })
    
    it.skip('Valide o valor do pedido', function() {
        cy.get('#sc-subtotal-amount-buybox > .a-size-medium').invoke('text').should('contains.text','215,64')
        
    })
   

  })