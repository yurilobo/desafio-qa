// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('amazon', () => {
    cy.visit('https://www.amazon.com.br')
    
})
/*Cypress.Commands.add('amazonLogado', () => {
    cy.visit('https://www.amazon.com.br')
    .get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click()
    .get('#ap_email').type("email {enter}")
    .get('#ap_password').type("senha")
    .get('#signInSubmit').click()
})*/