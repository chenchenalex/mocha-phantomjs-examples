if (typeof exports !== 'undefined') {
  exports.test = test;
  exports.asyncFunction = asyncFunction;
  exports.testArray = testArray;
}

function test(input) {
  return input * 3;
}

function testArray(num){
  return [1, 2, 3].indexOf(num);
}

function asyncFunction(flag) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if(!flag) return resolve(12345);
      resolve('Hello world');
    }, 1000);
  });
}
