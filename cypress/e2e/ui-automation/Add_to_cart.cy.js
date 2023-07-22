import 'cypress-xpath';
import AddToCart_Page from '../Page_Object_Model/AddToCart_Page.cy';

// Test: Shop a product - Selecting a product and checking out
describe('Selecting a product and Adding it to Cart', () => {
  it('Select and Add to cart test', () => {
    const addToCart_Page = new AddToCart_Page();
    // Step 1: Visit the main page
    cy.visit('/');

    // Step 2: Select a product with size M
    addToCart_Page.elements.Size_M().click();

    // Step 3: Check the product availability with size M
    addToCart_Page.elements.getProductLength('have.length', 1);

    // Step 4: Add the product to the cart
    addToCart_Page.AddToCart();

    // Step 5: Verify the selected product in the cart
    addToCart_Page.elements.selectedProductInCart();

    // Step 6: Verify that the selected product count is 1
    addToCart_Page.elements.selectedProductPriseAmount();
  });
});
