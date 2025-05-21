function parse(expr) {
    let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  
    let result = expr.match(regexp);
  
    if (!result) return [];
    result.shift();
  
    return result;
  }
  
  alert( parse("-1.23 * 3.45") );  // -1.23, *, 3.45