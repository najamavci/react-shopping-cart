// Test: Remove product from the cart if it exists

describe('Remove product from cart', () => {
  it('Remove a product from the cart if it exists', () => {
    // Step 1: Visit the main page
    cy.visit('/');

    // Step 2: Click on the "Add to Cart" button
    cy.get('.sc-1h98xa9-2').click();

    // Step 3: Wait for the specific element to be present (assumes it appears after adding the product)
    cy.get('.sc-7th5t8-1')
      .should('exist')
      .then(() => {
        // Step 4: Click on the 'x' to remove the product from the cart
        cy.get('.sc-1h98xa9-0 > span').click({ force: true });
      });

    // Step 5: Assertion of the message after removing the product
    cy.get('.sc-1h98xa9-2').click(); // Click on the cart again
    cy.wait(3000);

    // Step 6: Get the text from the element and use it for further assertions or logging
    cy.get('.sc-7th5t8-0')
      .invoke('text')
      .then((text) => {
        cy.log('Text from the element:', text);

        // Step 7: You can perform assertions based on the text content, if needed
        expect(text).to.not.be.empty;
      });
  });
});
