const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const assert = require('chai').assert;

Given(/^I open the login page$/, async () => {
    await LoginPage.open();
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.username.setValue(username);
    await LoginPage.password.setValue(password);
    await LoginPage.loginBtn.click();
});

Then(/^I should see the "([^"]*)"$/, async (message) => {
    const welcomeText = await LoginPage.welcomeMsg.getText();
    assert.strictEqual(welcomeText, message);
});

Then(/^I should see the warning meaasge "([^"]*)"$/, async (message) => {
    const Text = await LoginPage.warningcomeMsg.getText();
    assert.strictEqual(Text, message);
});