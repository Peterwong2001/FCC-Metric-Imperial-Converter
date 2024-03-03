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
  
  test('Correctly convert gal to L', function(done) {
    
  })
  
  test('Correctly convert L to gal', function(done) {
    
  })
  
  test('Correctly convert mi to km', function(done) {
    
  })
  
  test('Correctly convert km to mi', function(done) {
    
  })
  
  test('Correctly convert lbs to kg', function(done) {
    
  })
  
  test('Correctly convert kg to lbs', function(done) {
    
  })
  
  ////////////////
  test('For each valid unit inputs', function(done) {
    let input = ['gal', 'GAL', 'l', 'L', 'mi', 'MI', 'km', 'KM', 'lbs', 'LBS', 'kg', 'KG']
    input.forEach(function(ele) {
      assert.equal(convertHandler.getUnit(32 + ele), ele)
    });
    done();
  })
  
  
});