// nodejs does not support ES2015 syntax, so don't use them without babel transpile

// use BDD as default testing style
var expect = chai && chai.expect;

// Test module
describe('addclass() in script.js', function() {

    var container = $('.test-container');

    // Test case
    it('should have a new class name', function() {

        // run function

        addClass();

        // Test function
        expect(container.attr('class')).to.be.equal('test-container new-class');
    })
});

// Test Jquery Dom manupulation
describe('addDivs() in script.js', function() {

    it('should add three divs into .test-container', function() {
        addDivs(3);

        expect($('.test-container').html().toString()).to.be.equal('<div></div><div></div><div></div>');

        $('.test-container').html('');

    })

    it('should add five divs into .test-container', function() {

        addDivs(5);

        expect($('.test-container').html().toString()).to.be.equal('<div></div><div></div><div></div><div></div><div></div>');

        $('.test-container').html('');
    })

});

describe('clearDom() in script.js', function() {

    it('should clear the dom elements', function() {

        $('.test-container').html('112312323');

        clearDom();

        expect($('.test-container').html()).to.be.equal('');
    })
});