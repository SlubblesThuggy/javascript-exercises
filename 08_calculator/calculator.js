const add = function(lhs, rhs) {
	return lhs + rhs;
};

const subtract = function(lhs, rhs) {
	return lhs - rhs;
};

const sum = function(terms) {
  return terms.reduce((sum, term) => sum += term, 0);
};

const multiply = function(factors) {
  return factors.reduce((product, factor) => product *= factor, 1);
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
