const script = require("../src/script.js");

const expect = require('chai').expect,
      assert = require('chai').assert,
      should = require('chai').should();


const foo = 'abc';

describe('#indexOf()', function() {
  
  // use a loop to create 50 tests
  for(var i = 0; i< 50; i++){
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));

      expect([1,2,3].indexOf(4)).to.equal(-1);

      expect(script.test(3)).to.equal(9);

    });
  }


  // it('should be a string as foo', function(){
  //   foo.should.be.a('string');
    
  // })

});

