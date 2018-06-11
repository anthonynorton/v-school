const rls = require('readline-sync')

console.log(
  Array(30)
    .fill('\n')
    .join(''),
)

// Make one of the inputs all uppercase(i.e., given the string “hello” prints “HELLO”)
const makeThisUpper = rls.question('\nWhat is your favorite movie? ')
let sayToThem = `\n${makeThisUpper.toUpperCase()}!!! What the hell?\n...okay ...okay. Remember self, stay calm.`
console.log(sayToThem)

// Report back the number of characters in a given input
sayToThem = `small talk... yeah... small talk.\n`
sayToThem += `\nDid you know there are ${
  makeThisUpper.trim().length
} characters in ${makeThisUpper}?`
console.log(sayToThem)
console.log(`Pretty cool, eh?!\t\tyeah, that was good. more like that...`)

// Concatenate(add) two separate strings together

const fname = rls.question(
  '...\nMy first name is Benji. What is your first name? ',
)
const lname = rls.question('...Ooohhh... um, what is your last name? ')

console.log(
  `\nSo your name is ${fname} ${lname}? Hmm...\n\nPretty nice... pretty pretty nice...\n`,
)

// Given a long message(more than twenty letters), return only the last half of the message
let whatAreYouWearing = ''
let firstTime = true

do {
  if (!firstTime) {
    console.log('\n\nOh come on! Tell me more than that. Eeee—la-bore-rate!\n')
  }
  whatAreYouWearing = rls.question('What are you wearing? ')
  console.log('\n\n')

  firstTime = false
} while (whatAreYouWearing.length < 30)

console.log(
  "So you are wearing... \t\t\tWhat? ... No. ... No, I'm not going to say that!",
)
console.log(
  '... wearing... ...${whatAreYouWearing.substr(whatAreYouWearing.length / 2)}',
)
console.log('\n\nNice!\n\n')

// Using the same long message(but without making the user type it in again), have your program print it to the terminal for the user to read again, but specify from where it will print.
// Example: If the long message given in #4 was hello my name is John and I'm 30 then the user could give any number. So if the user entered 14 it would print off s John and I'm 30
let numberGiven = 0
let gotIt = false
while (!gotIt) {
  numberGiven = Number(
    rls.question(
      `Give me a number between 5 and ${whatAreYouWearing.length - 8}: `,
    ),
  )

  if (isNaN(numberGiven)) {
    console.log(
      `That is not a number between 5 and between 5 and ${whatAreYouWearing.length -
        8}!\n\n`,
    )
  } else {
    gotIt = true
  }
}

console.log(
  `...\n...\n"${whatAreYouWearing.substr(
    numberGiven,
  )}" is what you said! (hehhehe...) That's a fun game huh!\n\n`,
)

console.log(`\n\nWell... bye ${fname} ${lname}!\n\n`)
