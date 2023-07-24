const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  projectId: 'pott6z',
  reporter: 'cypress-mochawesome-reporter', // for html report
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  chromeWebSecurity: false,
  pageLoadTimeout: 6000,
  execTimeout: 6000,
  failOnStatusCode: false,
  // "video": false,

  e2e: {
    baseUrl: 'https://react-shopping-cart-67954.firebaseapp.com/4',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); //for html report      // implement node event listeners here
    },
  },
};
