let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    result = input.match(inputRegex[0])
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    result = input.match(inputRegex)[1]
    
    let validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG']
    
    if (!validUnits.includes(result)) {
      return 'Invalid unit'
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    if (initUnit === 'gal') {
      result = 'l'
    } else if (initUnit === 'l') {
      result = 'gal'
    }
    
    if (initUnit === 'lbs') {
      result = 'kg'
    } else if (initUnit === 'kg') {
      result = 'lbs'
    }
    
    if (initUnit === 'mi') {
      result = 'km'
    } else if (initUnit === 'km') {
      result = 'mi'
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    if (initUnit === 'gal') {
      result = (initNum * galToL).toFixed(5)
    } else if (initUnit === 'l') {
      result = (initNum / galToL).toFixed(5)
    }
    
    if (initUnit === 'lbs') {
      result = (initNum * lbsToKg).toFixed(5)
    } else if (initUnit === 'kg') {
      result = (initNum / lbsToKg).toFixed(5)
    }
    
    if (initUnit === 'mi') {
      result = (initNum * miToKm).toFixed(5)
    } else if (initUnit === 'km') {
      result = (initNum / miToKm).toFixed(5)
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
