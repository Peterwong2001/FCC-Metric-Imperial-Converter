const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  test('Whole number input', function(done) {
    let input = '32L';
    assert.equal(convertHandler.getNum(input), 32);
    done();
  })
  
  test('Decimal number input')
  
});