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
 
Cypress.Commands.add('signIn', (userData) => {
  cy.get('#shipping_address-firstname').type(userData.firstName);
  cy.get('#shipping_address-lastname').type(userData.lastName);
  cy.get('#shipping_address-street_address').type(userData.streetAddress);
  cy.get('#shipping_address-postcode').type(userData.postCode);
  cy.get('#shipping_address-city').type(userData.city);
  cy.get('#checkout-email_address').type(userData.email);
});

// Login Command  
Cypress.Commands.add('login', (userData) => {
  cy.signIn(userData); 
});
  
// Search and Add Product Command
Cypress.Commands.add('searchAndAddProduct', (productName, quantity) => {
  cy.get('div.name a').contains(productName).click();
  cy.wait(1000); // Mandatory wait for Javascript loading in page. Ugly but necessary
  cy.get('button.btn-2.add-to-cart').click();
  cy.get('.popup-box-wrap', { timeout: 10000 }).should('be.visible');
  for (let i = 1; i < quantity; i++) {
      cy.get('div.qty span.bigger').click(); // Quantity raise based on parameter
  }
  cy.get('div.right-buttons a.btn-2').should('be.visible').click();
  cy.get('a.btn-to-checkout').should('be.visible').click();

  });
  
// Checkout Command
Cypress.Commands.add('checkoutAndConfirm', () => {
  cy.get('input[type="radio"][name="payment"][value="cod"]').should('be.visible').click();
  cy.get('#checkout-terms').should('be.visible').should('be.enabled').click();
  cy.get('.btn-next').should('be.visible').and('not.have.class', 'disabled-area').click();
});
  