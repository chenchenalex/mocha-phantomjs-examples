#Mocha-phantom simple setup 

This repo includes two unit testing scripts and using Mocha + chai to test some simple js functions and jquery DOM operations. [![Build Status](https://travis-ci.org/chenchenalex/mocha-phantomjs-examples.svg?branch=master)](https://travis-ci.org/chenchenalex/mocha-phantomjs-examples) 

1. gulp-mocha is for testing scripts which doesn't need to manipulate DOM elements, generally much faster than using gulp-mocha-phantomjs
2. gulp-mocha-phantomjs allows developer to test js with a headless browser DOM. Be sure avoid using ES6 syntaxes without Babel compilers because phantomjs has limited support for ES6

Run command: npm run test