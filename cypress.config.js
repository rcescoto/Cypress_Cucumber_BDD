const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
   specPattern: "**/*.feature",
   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
   },
   video: false,
   defaultCommandTimeout: 5000,
   execTimeout: 20000,
   pageLoadTimeout: 10000,
   excludeSpecPattern: ["*.js", "*.md"]
 },
});