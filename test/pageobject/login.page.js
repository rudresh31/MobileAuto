class LoginPage {
    // get burger Icon by xpath
    get BurgerIcon() { return $('//*[@content-desc="open menu"]/android.widget.ImageView'); }
    // get lohin link by xpath
    get loginlink() { return $('//*[@text="Log In"]'); }
    // get user name field by accessibility id
    get username() { return $('~Username input field'); }
    // get password field by accessibility id
    get password() { return $('~Password input field'); }
    // get login btn by accessibility id
    get loginBtn() { return $('~Login button'); }
    // get welcome message text by xpath
    get welcomeMsg() { return $('//android.widget.TextView[@text="Products"]'); }
    // get warning message text by xpath
    get warningcomeMsg() { return $('//*[@text="Provided credentials do not match any user in this service."]'); }

    async open() {
        // opening app and launching activity
        await browser.url('apps\Android-MyDemoAppRN.1.3.0.build-244.apk');
        // click on burgor Icon
        await this.BurgerIcon.click()
        // click on login link 
        await this.loginlink.click()

        
    }
}

module.exports = new LoginPage();