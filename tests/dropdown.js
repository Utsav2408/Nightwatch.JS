module.exports = {
    "Dropdown Test": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        
        // browser.setValue("#dropdown", "Thor");
        browser.setValue("#dropdown", "Black");
        browser.pause(4 * 1000);

        browser.click("#dropdown option:nth-child(4)");
        browser.pause(4 * 1000);
        
        browser.end();
    }
}