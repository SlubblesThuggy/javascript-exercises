const add = function(lhs, rhs) {
	return lhs + rhs;
};

const subtract = function(lhs, rhs) {
	return lhs - rhs;
};

const sum = function(terms) {
	let sum = 0;
  terms.forEach(term => sum += term);
  return sum;
};

const multiply = function(factors) {
  let product = 1;
  factors.forEach(factor => product *= factor);
  return product;
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
	let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
