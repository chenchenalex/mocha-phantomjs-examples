const script = require("../src/script.js");

const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("should");

describe('#indexOf()', () => {
  // use a loop to create 50 tests
  it('should return -1 when the value is not present', () => {
    assert.equal(-1, [1, 2, 3].indexOf(4));

    expect(script.testArray(4)).to.equal(-1);

    expect(script.test(3)).to.equal(9);
  });

  it('test asynchronous functions', (done)=>{

    script.asyncFunction(false)
      .then(function(data){
        expect(data).to.equal(12345);
        done();
      })
  })

  it('test Promise with should assertion library', ()=>{
    return script.asyncFunction().should.be.fulfilledWith(12345);
  })
});


