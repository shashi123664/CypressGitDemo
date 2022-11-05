const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 36000,
  pageLoadTimeout: 120000,
  projectId: '5rvgy3',
  reporter: 'mochawesome',
  chromeWebSecurity: true,
  projectId: "opzq9x",
  experimentalSourceRewriting: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalSessionAndOrigin: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
