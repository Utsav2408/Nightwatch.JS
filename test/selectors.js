module.exports = {
    "xpath test": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        const xpathSelector = "//*[@id='text-input']";

        browser.useXpath();
        browser.setValue(xpathSelector, "Utsav's Xpath is here!");
        browser.pause(4 * 1000)

        browser.end()
    },
    
    "css test": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        
        const cssSelector = "#text-input";

        browser.useCss()
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector, "Utsav's CSS is here!");
        browser.pause(4 * 1000)
    }
}