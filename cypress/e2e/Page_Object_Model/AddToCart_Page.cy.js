class AddToCart_Page {
  elements = {
    Size_M: () => cy.get(':nth-child(4) > label > .checkmark'),
    getProductLength: () => cy.get('.sc-ebmerl-4 > p'),
    AddToCartButton: () => cy.get('.sc-124al1g-0'),
    selectedProductInCart: () => cy.get('.sc-11uohgb-2'),
    selectedProductVerification: () => cy.get('.sc-11uohgb-2'),
    selectedProductPriseAmount: () =>
      cy.xpath(
        "//*[contains(@class, 'sc-1h98xa9-3') and contains(text(), '1')]"
      ),
  };

  ClickSizeM() {
    this.elements.Size_M().click();
  }
  getTheAvailableProductsFromPage() {
    this.elements.getProductLength().click();
  }
  AddToCart() {
    this.elements.AddToCartButton().eq(3).click();
  }
  SelectedProductName_Verification() {
    this.elements
      .selectedProductInCart()
      .should('have.text', 'Black Tule Oversized');
  }
}
export default AddToCart_Page;
