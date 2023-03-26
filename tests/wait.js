module.exports = {
    "WaitForElement":
    function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/wait-for-element.html");
        browser.assert.visible("#element-1");
        // browser.assert.visible("#element-2");
        browser.waitForElementVisible("#element-2", 8 * 1000);
        browser.assert.not.elementPresent("#element-1");
        browser.waitForElementNotPresent("#element-2", 8 * 1000);
        browser.end();
    },  
}