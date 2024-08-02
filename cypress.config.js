const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Update this to match the directory structure
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
