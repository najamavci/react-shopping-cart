The project 'REACT SHOOPING CART' is a technical challenge for Agreena company.

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

About the Project structure:
The project consist of two part:

1. UI Automation
2. API Testing

Part 1: UI Automation
Forking the Repository
I started the Agreena QA Engineer Tech Challenge by forking the following repository into my GitHub profile:

Repository: https://github.com/jeffersonRibeiro/react-shopping-cart

Test Case Documentation
After setting up the app as per the instructions in the repository's Readme, I proceeded to document at least three test cases for the application. The test cases covered critical functionalities and edge cases to ensure comprehensive test coverage.

Test Case 1: User Cart Functionality
Description: Verify that the user can add items to the cart, update the quantity of items, and remove items from the cart.

Steps:

Open the application and navigate to the product listing page.
Add a product to the cart.
Verify that the cart icon updates to show the number of items added.
Navigate to the cart page and verify that the added product is displayed.
Update the quantity of the product and verify that the total price is updated accordingly.
Remove the product from the cart and verify that the cart is now empty.
Test Case 2: Checkout Process
Description: Ensure the checkout process works as expected, including entering shipping details and completing the order.

Steps:

Add a product to the cart if not already added.
Navigate to the cart page and click on the "Checkout" button.
Enter valid shipping details (name, address, email, etc.).
Click on the "Place Order" button and verify that the order is successfully placed.
Check the confirmation message and order details on the order success page.
Test Case 3: Product Sorting
Description: Validate the product sorting functionality based on different criteria.

Steps:

Navigate to the product listing page.
Verify the default sorting is applied (e.g., sorting by relevance or popularity).
Select a different sorting option (e.g., price, name, etc.).
Verify that the products are displayed in the correct order based on the selected sorting option.
Test Case Automation using Cypress
Next, I automated the three test cases I documented using Cypress, a powerful testing framework for web applications. The automation process involved writing test scripts in JavaScript to interact with the application, perform actions, and validate expected outcomes.

Bug Reporting and Improvement Suggestions
During the UI automation testing, I encountered a couple of bugs and identified areas for improvement in the application.

Bug 1: Incorrect Product Price Calculation
Description: When updating the quantity of a product in the cart, the total price is not calculated correctly.

Steps to Reproduce:

Add a product to the cart.
Navigate to the cart page and note the initial total price.
Increase the quantity of the product.
Verify that the total price is not updated to reflect the correct total for the increased quantity.
Improvement Suggestion:
To fix this issue, the application should properly calculate the total price based on the updated quantity of items in the cart.

Bug 2: Inconsistent Sorting Option
Description: The product sorting option "Price: Low to High" does not consistently sort the products in ascending order of price.

Steps to Reproduce:

Navigate to the product listing page.
Select the "Price: Low to High" sorting option.
Verify that some products are not correctly sorted based on their prices.
Improvement Suggestion:
The application should be updated to ensure consistent and accurate sorting of products based on the selected sorting option.

Part 2: API Automation
For the API automation part, I automated the endpoints of the "Petstore" API available at https://petstore.swagger.io/. I used Postman to create test scripts for each API endpoint, sending relevant requests and verifying the responses.

Once the API automation was completed, I prepared the test JSON file containing all the test cases and sent it as part of my submission.

Part 3: Release Test
Preparing the Checklist
To ensure a smooth release for the application hosted at https://react-shopping-cart-67954.firebaseapp.com/, I created a comprehensive checklist to test its main features thoroughly.

Prioritizing the Checklist
After preparing the checklist, I prioritized the items based on their criticality. The prioritization allows the development and testing teams to focus on the most important functionalities first and ensures that potential show-stopping issues are identified early in the release process.

Conclusion
Completing the Agreena QA Engineer Tech Challenge was a great experience that allowed me to showcase my skills in UI and API automation testing. I thoroughly enjoyed working on the test cases, automating them using Cypress and Postman, and providing valuable feedback through bug reports and improvement suggestions. The checklist for the release test ensured that the main features of the application were thoroughly tested and prioritized appropriately.

I hope my efforts and accomplishments in this tech challenge demonstrate my capabilities as a QA Engineer and showcase my dedication to ensuring the quality and reliability of software applications. I look forward to discussing my work further with the Agreena team and exploring how I can contribute to the success of the company as a QA Engineer. Thank you for this opportunity, and I am excited to take the next steps in the hiring process!
