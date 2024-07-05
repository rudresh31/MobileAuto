const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const assert = require('chai').assert;

Given(/^I open the login page$/, async () => {
    // opening app
    await LoginPage.open();
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    // Entering Username
    await LoginPage.username.setValue(username);
    // Entering Password
    await LoginPage.password.setValue(password);
    // clicking on login btn
    await LoginPage.loginBtn.click();
});

Then(/^I should see the "([^"]*)"$/, async (message) => {
    // get welcome message
    const welcomeText = await LoginPage.welcomeMsg.getText();
    // asserting Text
    assert.strictEqual(welcomeText, message);
});

Then(/^I should see the warning meaasge "([^"]*)"$/, async (message) => {
    // get Warning message
    const Text = await LoginPage.warningcomeMsg.getText();
    // asserting Text
    assert.strictEqual(Text, message);
});