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
    let input = [5, 'gal'];
    let expected = 18.9271;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  })
  
  test('Correctly convert L to gal', function(done) {
    let input = [5, 'L'];
    let expected = 1.32086;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  })
  
  test('Correctly convert mi to km', function(done) {
    
  })
  
  test('Correctly convert km to mi', function(done) {
    
  })
  
  test('Correctly convert lbs to kg', function(done) {
    let input = [5, 'lbs'];
    let expected = 2.26796;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  })
  
  test('Correctly convert kg to lbs', function(done) {
    let input = [5, 'kg'];
    let expected = 
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