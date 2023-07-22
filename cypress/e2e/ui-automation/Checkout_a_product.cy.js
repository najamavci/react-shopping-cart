import 'cypress-xpath';

// Test: Shop a product and check out a selected product
describe('Shop a product and check out', () => {
  it('Add a product to the cart', () => {
    // Visit the website's main page
    cy.visit('/');

    // Find and click on a product to add it to the cart
    cy.get('.dwOYCh > .sc-124al1g-0').click();

    // Verify that the selected product count is 1
    cy.xpath("//*[contains(@class, 'sc-1h98xa9-3') and contains(text(), '1')]");

    // Click on the Checkout button
    cy.get('.sc-1h98xa9-11').click();

    // Wait for 3 seconds to allow the checkout process to initialize
    cy.wait(3000);

    // Verify that a button is visible on the page
    cy.get('body').find('button').should('be.visible');
  });
});
