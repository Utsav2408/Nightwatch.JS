# Nightwatch.JS
Learning NightWatch.JS

To run 1 test - 
npx nightwatch -e chrome --headless --test file directory

To run all tests - 
npx nightwatch -e chrome --headless

To run tests with tag - 
Just add tags = [tagname] at the top of testcase
npx nightwatch -e chrome --headless --tag tagname
To skip tests with certain tag - 
npx nightwatch -e chrome --headless --skiptags tagname

To run tests within group - 
npx nightwatch -e chrome --headless --group "directory having multiple testcases"
To skip tests within group - 
npx nightwatch -e chrome --headless --skipgroup "directory having multiple testcases"



