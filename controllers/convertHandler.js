let inputRegex = /[a-z]+|[^a-z]+/gi;
let numberRegex = /\d/;

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let result;
    
    result = input.match(inputRegex)[0];
    
    if (numberRegex.test(result) === false) {
      result = 1;
    }
    
    if (result.toString().includes('/')) {
      
      let values = result.toString().split('/')
      if (values.length > 2) {
    	  return 'invalid number'   
      } else {
          result = parseFloat(parseFloat(values[0])/parseFloat(values[1]).toFixed(5))
      }  
    }
    
    if (isNaN(result)) {
      return 'invalid number'
    }
    
    return result;
    
  };
  
  this.getUnit = function(input) {
    
    let result;
    
    result = input.match(inputRegex)[1];
    
    
    
    if (!result) {
      result = input.match(inputRegex)[0]
    }
    
    let validUnits = ['gal', 'GAL', 'l', 'L', 'mi', 'MI', 'km', 'KM', 'lbs', 'LBS', 'kg', 'KG'];
    if (!validUnits.includes(result)) {
      return 'invalid unit'
    }
    
    result = result.toLowerCase();
    
    if (result === 'l') {
      result = 'L';
    }
   
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    
    if (initUnit === 'gal' || initUnit === 'GAL') {
      result = 'L'
    } else if (initUnit === 'l' || initUnit === 'L') {
      result = 'gal'
    }
    
    if (initUnit === 'mi' || initUnit === 'MI') {
      result = 'km'
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = 'mi'
    }
    
    if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = 'kg'
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = 'lbs'
    }
    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch (unit) {
      case 'gal':
      case 'GAL':
        result = 'gallons';
        break;
      case 'l':
      case 'L':
        result = 'litres';
        break;
      case 'mi':
      case 'MI':
        result = 'miles';
        break;
      case 'km':
      case 'KM':
        result = 'kilometers'
        break;
      case 'lbs':
      case 'LBS':
        result = 'pounds';
        break;
      case 'kg':
      case 'KG':
        result = 'kilograms';
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    if (initUnit === 'gal' || initUnit === 'GAL') {
      result = (initNum * galToL).toFixed(5)
    } else if (initUnit === 'l' || initUnit === 'L') {
      result = (initNum / galToL).toFixed(5)
    }
    
    if (initUnit === 'mi' || initUnit === 'MI') {
      result = (initNum * miToKm).toFixed(5)
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = (initNum / miToKm).toFixed(5)
    }
    
    if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = (initNum * lbsToKg).toFixed(5)
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = (initNum / lbsToKg).toFixed(5)
    }
    
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' +  returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit)
    
    
    return result;
  };
  
}

module.exports = ConvertHandler;
