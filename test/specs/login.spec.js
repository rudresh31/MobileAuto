import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobject/login.page.js';
import { assert } from 'chai';

const loginpage = new LoginPage();

Given(/^I open the login page$/, async () => {
    // click on the burger icon
    await loginpage.BurgerIcon.click()
    // click on login link 
    await loginpage.loginlink.click()
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    // Entering Username
    await loginpage.username.setValue(username);
    // Entering Password
    await loginpage.password.setValue(password);
    // clicking on login btn
    await loginpage.loginBtn.click();
});

Then(/^I should see the "([^"]*)"$/, async (message) => {
    // get welcome message
    const welcomeText = await loginpage.welcomeMsg.getText();
    // asserting Text
    assert.strictEqual(welcomeText, message);
});

Then(/^I should see the warning meaasge "([^"]*)"$/, async (message) => {
    // get Warning message
    const Text = await loginpage.warningcomeMsg.getText();
    // asserting Text
    assert.strictEqual(Text, message);
});

Then(/^I should see the warning meaasge for username "([^"]*)"$/, async (message) => {
    // get Warning message for username
    const Text = await loginpage.invalidUserMsg.getText();
    // asserting Text
    assert.strictEqual(Text, message);
});

Then(/^I should see the warning meaasge for password "([^"]*)"$/, async (message) => {
    // get Warning message for username
    const Text = await loginpage.invalidPasswordMsg.getText();
    // asserting Text
    assert.strictEqual(Text, message);
});