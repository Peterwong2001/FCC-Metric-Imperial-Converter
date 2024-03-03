const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
    let input = '32L';
    assert.equal(convertHandler.getNum(input), 32);
    done();
  })
  
  test('Decimal number input', function(done) {
    let input = '32.65L';
    assert.equal(convertHandler.getNum(input), 32.65);
    done();
  })
  
  test('Fractional input', function(done) {
    let input = '12/8mi';
    assert.equal(convertHandler.getNum(input), 1.5);
    done();
  })
  
  test('Fractional input with a decimal', function(done) {
    let input = '27/5.4mi';
    assert.equal(convertHandler.getNum(input), 5);
    done();
  })
  
  test('Error on a double-fraction', function(done) {
    let input = '3/7.2/4kg';
    let expected = 'invalid number';
    assert.equal(convertHandler.getNum(input), 'invalid number')
    done();
  })
  
  test('Default to a numerical input of 1 when no numerical input is provided', function(done) {
    let input = 'kg';
    let expected = 1;
    assert.equal(convertHandler.getNum(input), 1)
    assert.equal(convertHandler.getUnit(input), 'kg')
    done();
  })
  
  test('Valid input unit', function(done) {
    let input = ['gal', 'GAL', 'l', 'L', 'mi', 'MI', 'km', 'KM', 'lbs', 'LBS', 'kg', 'KG'];
    let expect = ['gallon(s)', 'litre(s)', 'mile(s)', 'kilometre(s)', 'pound(s)', 'kilogram(s)'];
    input.forEach(function(ele, i) {
      assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
    })
    done();
  })
  
  test('Return an error for an invalid input unit', function(done) {
    let input = 'g';
    let expected = 'invalid unit';
    assert.equal(convertHandler.getUnit(input), expected)
    done();
  })
    
  /*
  test('Return the correct return unit for each valid input unit', function(done) {
    
  })
  
  test('Return the correct spelled-out string unit for each valid input unit', function(done) {
    
  })
  */
  
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
    let input = [5, 'mi'];
    let expected = 8.04672;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  })
  
  test('Correctly convert km to mi', function(done) {
    let input = [5, 'km'];
    let expected = 3.10686;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  })
  
  test('Correctly convert lbs to kg', function(done) {
    let input = [5, 'lbs'];
    let expected = 2.26796;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  })
  
  test('Correctly convert kg to lbs', function(done) {
    let input = [5, 'kg'];
    let expected = 11.0231;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  })
  
  ////////////////
  test('For each valid unit inputs', function(done) {
    let input = ['gal', 'GAL', 'l', 'L', 'mi', 'MI', 'km', 'KM', 'lbs', 'LBS', 'kg', 'KG']
    input.forEach(function(ele) {
      assert.equal(convertHandler.getUnit(32 + ele), ele)
    });
    done();
  })
  })
});