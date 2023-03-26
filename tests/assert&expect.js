module.exports = {
    "Assert Visible": 
    "" + //Disables a Test
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.visible("#assert-verify-header");
        browser.click("#make-header-invisible");
        browser.assert.not.visible("#assert-verify-header");
        browser.end();
    },

    "Assert Contains Text": 
    "" + 
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.containsText("#more-text", "some more text");
        browser.click("#change-text");
        browser.assert.containsText("#more-text", "changed me");        
        browser.end();
    },

    "Assert Present": 
    "" + 
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.elementPresent("#some-list");
        browser.click("#remove-list");
        browser.assert.not.elementPresent("#some-list");
        browser.end();
    },

    "Assert Enable Test": 
    "" + 
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html");
        browser.assert.attributeEquals("#am-i-disabled", "disabled", "true");
        browser.setValue("#type-to-enable", "Enabled!");
        // browser.assert.attributeEquals("#am-i-disabled", "disabled", "false");
        browser.end();
    },

    "Expect Visible": 
    "" + 
    function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect.element("#assert-verify-header").to.be.visible;
        browser.click("#make-header-invisible");
        browser.expect.element("#assert-verify-header").to.not.be.visible;
        browser.end();
    },

    "Expect Contains Text": 
    "" +
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect.element("#more-text").text.to.contain("some more text");
        browser.click("#change-text");
        browser.expect.element("#more-text").text.to.equal("You changed me!");        
        browser.end();
    },

    "Expect Present": 
    "" + 
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect.element("#some-list").to.be.present;
        browser.click("#remove-list");
        browser.expect.element("#some-list").to.not.be.present;
        browser.end();
    },

    "Expect Enable Test": 
    "" + 
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html");
        browser.expect.element("#am-i-disabled").to.not.be.enabled;
        browser.setValue("#type-to-enable", "Enabled!");
        browser.expect.element("#am-i-disabled").to.be.enabled;
        browser.end();
    },

}