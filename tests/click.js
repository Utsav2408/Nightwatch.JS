module.exports = {
    "click the button": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html");
        // browser.pause(); Pauses for eternity
        browser.click("#surprise-button");
        browser.pause(3 * 1000);
        browser.end();
    }
}