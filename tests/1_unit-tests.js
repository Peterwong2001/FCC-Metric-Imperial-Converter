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
  
  test('Decimal number input', function(done) {
    
  })
  
  test('Fractional input', function(done) {
    
  })
  
  test('Fractional input with a decimal', function(done) {
    
  })
  
  test('Error on a double-fraction', function(done) {
    
  })
  
  test('Default to a numerical input of 1 when no numerical input is provided', function(done) {
    
  })
  
  test('Valid input unit', function(done) {
    
  })
  
  test('Return an error for an invalid input unit', function(done) {
    
  })
  
  test('Return the correct return unit for each valid input unit', function(done) {
    
  })
  
  test('Return the correct spelled-out string unit for each valid input unit', function(done) {
    
  })
  
  test('For each valid unit inputs', function(done) {
    var input = ['gal', 'GAL', 'l', 'L', 'mi', 'MI', 'km', 'KM', 'lbs', 'LBS', 'kg', 'KG']
    
  })
  
  
});