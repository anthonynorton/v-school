// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(a, b) {
  return a + b;
}

console.log(`sum(${10}, ${5}): ${sum(10, 5)}`);

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function getLargest(...numbers) {
  return numbers.sort((a, b) => a < b)[0];
}

console.log(`getLargest(${105},${3},${972}): ${getLargest(105, 3, 972)}`);

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOrOdd(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}

console.log(`evenOrOdd(${14}): ${evenOrOdd(14)}`)

// Write a function that accepts a string as a parameter.If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself(string + string).If the string is more than twenty characters long, return the first half of the string.
function processString(str) {
  if (str.length <= 20) {
    return str + str;
  } else {
    return str.substr(0, Math.round(str.length / 2));
  }
}

console.log(`processString('This string is longer than 20 characters.'): ${processString('This string is longer than 20 characters.')}`);

// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter.Then print the first ‘n’ Fibonacci numbers and return their sum.

// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)

// Write a function that accepts a string as a parameter.Return the most frequently occuring letter in that string.
