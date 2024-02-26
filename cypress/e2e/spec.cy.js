describe('Order Submission Process', () => {
  beforeEach(() => {
    cy.visit('https://sqademosatp.net/watch/');
  });

  /// Test 1
  it('Completes purchase flow for Royal London 41003-03 with quantity 2', () => {
    cy.fixture('userData').then((userData) => {
      cy.searchAndAddProduct('Royal London 41003-03', 2);
      cy.login(userData);
      cy.checkoutAndConfirm();
      cy.get('.text-2').should('be.visible').and('have.text', "We've received your order");
    });
  });

  ///Test 2
  it('Completes purchase flow for Citizen Eco-Drive Silver Tone Men with quantity 3', () => {
      cy.fixture('userData').then((userData) => {
      cy.searchAndAddProduct('Citizen Eco-Drive Silver Tone Men', 3);
      cy.login(userData);
      cy.checkoutAndConfirm();
      cy.get('.text-2').should('be.visible').and('have.text', "We've received your order");
    });
  });
  
  ///Test 3
  it('Attempts to complete a purchase flow but fails in message assertion', () => {
    cy.fixture('userData').then((userData) => {
      cy.searchAndAddProduct('Royal London 41003-03', 2);
      cy.login(userData);
      cy.checkoutAndConfirm();
      // Intentionally checks an invalid message to fail the assertion
      cy.get('.text-2').should('be.visible').and('have.text', "Your order has processed");
    });
  });
});