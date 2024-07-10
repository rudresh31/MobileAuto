class LoginPage {
    // get burger Icon by xpath
    get BurgerIcon() { return $('//android.view.ViewGroup[@content-desc="open menu"]'); }
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
    // get warning message text not entring in the field email by xpath
    get invalidUserMsg() { return $('//*[@text="Username is required"]')}
    // get warning message text not entring password in the field by xpath
    get invalidPasswordMsg() { return $('//*[@text="Password is required"]')}
    
}

export default LoginPage;