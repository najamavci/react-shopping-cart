# The project name 'REACT SHOOPING CART'Agreena technical challenge

## Installation

To be able to run the project first fork the project from GitHub repository: https://github.com/najamavci/react-shopping-cart

Then install the app by following these steps:

1. Install the needed packages
   npm install
2. Then start the React app
   npm start
3. To run the tests
   npm run test

For installing Cypress oand open it on your device:

1. npm init -y
2. npm install
3. npm install --save-dev cypress
4. npx cypress open

There are few option to run cypress locally:

1. npx cypress run --browser // to run cypress on a browser hedaless
2. npx cypress run --browser chrome // to run cypress heade on Chrome browser
3. npx cypress run spec cypress\e2e\api-testing\User_API\Create_users_with_lists.cy.js // to run spcific folder or file (take the path of the desired file or folder)
4. npx cypress run // will produce the 'index.html' report which can be found within the project under "cypress\reports\html\index.html" path. Otherwise the project will create screenshots and videos on failure.

## The Project structure:

The project consist of two part:

1. UI Automation
2. API Testing

## UI Automation

Analytical Methodical and Dynamic - heuristic approach.

## UI Test Cases:

### Test Case 1: Selecting a product and Adding it to Cart

- Description: This test case verifies the ability to select a product with size "M" and add it to the cart.
- Test Data: The test data included the name of the product and the size "M."
- Test Steps: The main page was visited, the product with size "M" was selected, added to the cart, and verified in the cart with a count of 1.

### Test Case 2: Shop a product and check out a selected product

- Description: This test case validates the process of adding a product to the cart and checking out a selected product.
- Test Data: The test data included the product name and size.
- Test Steps: The main page was visited, a product was clicked to add it to the cart, the selected product count was verified, and the Checkout button was clicked.

### Test Case 3: React Shopping Cart page information visibility

- Description: This test case ensures the visibility of essential elements on the React Shopping Cart page.
- Test Steps: The visibility of the "Add to Cart" button, product information (paragraphs), and product sizes were validated.

### Test Case 4: Product price and checkout price verification

- Description: This test case verifies the correctness of product prices and checkout prices.
- Test Steps: The main page was visited, a product with size "S" was selected and added to the cart, and the displayed prices were verified using XPath-based locators.

### Test Case 5: Remove product from the cart if it exists

- Description: This test case tests the ability to remove a product from the cart.
- Test Steps: The main page was visited, a product was added to the cart, the product was removed using the 'X' button, and the cart was checked to ensure the removal. The displayed message after removing the product was verified.

## API Testing

Postman: # 31 Tests to run
Visual Studio Code: # 11 test cases

## Methods and techniques used for testing and the framework

# Mocha Javascrip framework with mochaawsome HTML report, screnshot and video recording

# Page Object Model for different structure demonstration

## Conclusion

Completing the Agreena QA Engineer Tech Challenge was a great experience that allowed me to showcase my skills in UI and API automation testing. I thoroughly enjoyed working on the test cases, automating them using Cypress and Postman, and providing valuable feedback through improvement suggestions. The checklist for the release test ensured that the main features of the application were thoroughly tested and prioritized appropriately.

I hope my efforts and accomplishments in this tech challenge demonstrate my capabilities as a QA Engineer and showcase my dedication to ensuring the quality and reliability of software applications. I look forward to discussing my work further with the Agreena team and exploring how I can contribute to the success of the company as a QA Engineer. Thank you for this opportunity, and I am excited to take the next steps in the hiring process!