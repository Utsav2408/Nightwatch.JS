module.exports = {
    "set and clear text": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.setValue("#text-input", "Utsav is Cool!");
        browser.pause(3 * 1000);

        browser.clearValue("#text-input");
        browser.pause(3 * 1000);

        browser.end();
    },

    // Deprecated
    // "using keys": function(browser) {
    //     browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        
    //     browser.click("#text-input");
    //     // browser.keys("we are using keys!");
    //     browser.keys(["a", "b", "c", "1", "2", "3"]);
    //     browser.pause(5 * 1000);

    //     browser.end();
    // }

    // We can use browser.Keys.______ to use any predefined keys in Selenium
    // browser.keys([browser.Keys.COMMAND/CONTROL, "a", browser.Keys.NULL -> to lift up and stop. browser.Keys.DELETE])
}