const add = function(num1, num2) {
	return (Number(num1) + Number(num2));
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2);
};
``
const sum = function(array) {
	let answer = 0;
  for (i=0; i<array.length; i++) {
    answer += Number(array[i]);
  }
  return answer;
};

const multiply = function(array) {
  let answer = Number(array[0]) * Number(array[1]);
  if (array.length == 2) {
    return answer;
  }
  else {
    for (i=2; i<array.length; i++) {
      answer *= Number(array[i]);
    }
    return answer;
  }
};

const power = function(num1, exp1) {
	return Number(num1) ** Number(exp1);
};

const factorial = function(num1) {
	let answer = 1;
  num1 = Number(num1);
  while (num1 > 0) {
    answer *= num1;
    num1 -= 1;
  }
  return answer;
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
