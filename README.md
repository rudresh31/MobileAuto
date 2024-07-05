## Prerequisites

1. Install Node.js and npm
2. Install Appium globally: `npm install -g appium`
3. Start Appium server: `appium`

## Setup

1. Clone the repository: `git clone <repo-url>`
2. Navigate to the project directory: `cd mobile-automation`
3. Install dependencies: `npm install`

## Running Tests

1. Ensure Appium server is running.
2. Run the tests: `npx wdio run wdio.conf.js`

## Reports

1. Test reports will be generated in the `allure-results` directory.
2. Generate and open the Allure report: `allure serve allure-results`
