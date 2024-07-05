class LoginPage {
    get username() { return $('~Username input field'); }
    get password() { return $('~Password input field'); }
    get loginBtn() { return $('~Login button'); }
    get welcomeMsg() { return $('//android.widget.TextView[@text="Products"]'); }
    get warningcomeMsg() { return $('//*[@text="Provided credentials do not match any user in this service."]'); }

}

module.exports = new LoginPage();