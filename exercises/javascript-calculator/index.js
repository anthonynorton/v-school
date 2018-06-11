const rls = require('readline-sync')

// Add func, add two numbers
const add = (num1, num2) => {
  return num1 + num2
}

// Sub func, subtracts two numbers
const sub = (num1, num2) => {
  return num1 - num2
}

// Mult func, multiply two numbers
const mul = (num1, num2) => {
  return num1 * num2
}

// Divi func, divides two numbers
const div = (num1, num2) => {
  return num1 / num2
}

const exit = () => {
  console.log('Come again soon.')
  return 'exit'
}

const calc = {
  add,
  sub,
  div,
  mul,
  exit,
}

const getInput = () => {
  const operations = ['add', 'sub', 'mul', 'div']
  const num1 = Number(rls.question('\n\nPlease enter your first number: '))
  const num2 = Number(rls.question('Please enter your first number: '))
  const operIndex = rls.keyInSelect(
    operations,
    'Please select the operation to perform: ',
  )
  if (operations.includes(operations[operIndex])) {
    const result = calc[operations[operIndex]](num1, num2)
    console.log(`The result is: \x1b[32m${result}\x1b[0m`)
    return result
  } else {
    return exit()
  }
}

let loop = true
do {
  loop = getInput()
} while (loop != 'exit')

// Prompts:

// • Please enter your first number:
// • Please enter your second number:
// • Please enter the operation to perform: add, sub, mul, div:

// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]
