// Test: Check visibility of information on the React Shopping Cart page

describe('React Shopping Cart page information visibility', () => {
  beforeEach(() => {
    // Before each test, visit the main page and verify the URL contains 'firebaseapp.com'
    cy.visit('/');
    cy.url().should('contain', 'firebaseapp.com');
  });

  it('Verify "Add to Cart" button visibility', () => {
    // Verify that the "Add to Cart" button is visible on the page
    cy.get('.sc-1h98xa9-2').should('be.visible');
  });

  it('Verify visibility of products found on the page', () => {
    // Verify that product information (paragraph) is visible on the page
    cy.get('.sc-ebmerl-4 > p').should('be.visible');
  });

  it('Verify product sizes visibility', () => {
    // Verify that product sizes are visible on the page
    cy.get('.sc-bj2vay-2').should('be.visible');
  });
});
