import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
