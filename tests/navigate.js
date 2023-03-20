module.exports = {
    "Navigate Method": function(browser) {
        
        // Takes us to the url we provide
        browser.url("https://www.google.com");

        // Gives us the current url
        browser.url(function(result) {
            console.log(result.value);
        });
    }
}