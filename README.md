
# Cypress Test Suite for OSSCommerce Online Watch Store Demo

This repository contains a Cypress test suite for automated end-to-end testing of an OSSCommerce online watch store Demo. The tests cover various user flows, including product selection, cart operations, checkout processes, and payment confirmation.

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js (version 12 or higher)
- npm (usually comes with Node.js)
- Cypress (version 13.6.6 or compatible)

## Installation

To set up the project for testing, follow these steps:

1. Clone the repository to your local machine:
``` git clone https://github.com/vicegomez/cypress-upc.git  ```
2. Navigate into the project directory
```cd cypress-upc```
3. Install the necessary dependencies with:
``` npm install```


## Running the Tests

You can run the tests in either headless mode or using the Cypress Test Runner.

### Headless Mode

To execute all tests in headless mode (without the GUI), use the following command:
```npx cypress run```

### Cypress Test Runner

To open the Cypress Test Runner for executing tests interactively with a GUI, use:
```npx cypress open```

## Project Structure

The project is organized into several directories:

- `cypress/integration/`: Contains the test specification files (`spec.cy.js`) where the test cases are defined.
- `cypress/fixtures/`: Includes JSON files with predefined data for testing (`userData.json`). Fixtures are used to mock data for tests, such as user information for login.
- `cypress/support/`: Houses the `commands.js` file, which extends Cypress with custom commands to encapsulate repetitive tasks (e.g., signing in, adding products to the cart).
- `cypress/videos/`: Generated videos of test runs are saved here (automatically created by Cypress when tests are executed in headless mode).
- `cypress/screenshots/`: Contains screenshots captured when a test fails, providing visual evidence for debugging (automatically created by Cypress on test failure).

## Configuration

The project's Cypress configuration is stored in `cypress.config.js`. This file includes settings for viewport dimensions, enabling video recording, and screenshot capture on test failure.

## Notes

- Ensure the online watch store's web application is accessible at `https://sqademosatp.net/watch/` as the tests are configured to run against this URL.

For more information on Cypress and its features, visit the [Cypress documentation](https://docs.cypress.io/).
