import 'cypress-xpath';

describe('Product prise and checkout prise verification', () => {
  it('Selected products prise and the checkout prise in the cart must e equal', () => {
    // Step 1: Visit the main page
    cy.visit('/');

    //selected s size product
    cy.get(':nth-child(3) > label > .checkmark').click();

    //add to cart
    cy.get('.kaJsVi > .sc-124al1g-0').click();

    //verify the prises
    cy.xpath('//*[@class="sc-11uohgb-4 bnZqjD"]')
      .invoke('text')
      .then((text1) => {
        // Extract the numeric part (10.99) from the text using a regular expression
        const amount1 = parseFloat(text1.match(/\d+\.\d+/)[0]);

        // Step 2: Get the text from the second element using XPath with class attribute
        cy.xpath('//*[@class="sc-124al1g-6 ljgnQL"]')
          .invoke('text')
          .then((text2) => {
            // Extract the numeric part (10.99) from the text using a regular expression
            const amount2 = parseFloat(text2.match(/\d+\.\d+/)[0]);

            // Step 3: Perform the comparison
            expect(amount1).to.equal(amount2);
          });
      });
  });
});
