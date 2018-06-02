function logGreen(str) { console.log('\n\x1b[32m%s\x1b[0m', str); };
function logRed(str) { console.log('\x1b[31m%s\x1b[0m', str); };
console.log('\n\n\nLoop Olympics');
console.log('\nPreliminaries');
logGreen('Write a for loop that prints to the console the numbers 0 through 9.');
let i = 1;
for (i; i < 10; i++) { console.log(i) }
logGreen('Write a for loop that prints to the console 9 through 0.');
for (i = 9; i >= 0; i--) { console.log(i) }
logGreen('Write a for loop that prints these fruits to the console.');
let fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++) { console.log(fruit[i]) }

console.log('\nBronze Medal');
logGreen('Write a for loop that will push the numbers 0 through 9 to an array.');
const zeroThroughNine = [];

for (i = 0; i < 10; i++) { zeroThroughNine.push(i) }
console.log(zeroThroughNine);

logGreen('Write a for loop that prints to the console only even numbers 0 through 100.');
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i)
}
logGreen('Write a for loop that will push every other fruit to an array.');
fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
let fruitBasket = [];
for (i = 0; i < fruit.length; i++) {
  if (i % 2 === 0) {
    fruitBasket.push(fruit[i]);
  }
}
console.log('fruitBasket: ', fruitBasket);


console.log('\nSilver Medal');

var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
logGreen('Write a loop that will print out all the names of the people of the people array');
for(i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}
logGreen('Write a loop that pushes the names into a names array, and the occupations into an occupations array.');
const names = [];
const occupations = [];
for (i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log('Names: ', names);
console.log('Occupactions: ', occupations);
logGreen('Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".');
const evenNames = [];
const oddOccupations = [];
for (i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    evenNames.push(peopleArray[i].name);
  } else {
    oddOccupations.push(peopleArray[i].occupation);
  }
}
console.log('Even Names: ', evenNames);
console.log('Odd Occupactions: ', oddOccupations);

console.log('\nGold Medal');
logGreen('Create an array that mimics a grid like the following using for loops:');
logRed(' [[0, 0, 0],');
logRed(' [0, 0, 0],');
logRed(' [0, 0, 0]]');
const grid1 = [];
for (i = 0; i < 9; i++) {
  if (i % 3 === 0) grid1.push([]);
  grid1[Math.floor(i / 3)][i % 3] = 0;
}
console.log('Grid1: ', grid1);


logGreen('2.Create an array that mimics a grid like the following using for loops:');
logRed(' [[0, 0, 0],');
logRed(' [1, 1, 1],');
logRed(' [2, 2, 2]]');
const grid2 = [];
for (i = 0; i < 9; i++) {
  if (i % 3 === 0) grid2.push([]);
  grid2[Math.floor(i / 3)][i % 3] = Math.floor(i / 3);
}
console.log('Grid2: ', grid2);

logGreen('3.Create an array that mimics a grid like the following using for loops:');
logRed(' [[0, 1, 2],');
logRed(' [0, 1, 2],');
logRed(' [0, 1, 2]]');
const grid3 = [];
for (i = 0; i < 9; i++) {
  if (i % 3 === 0) grid3.push([]);
  grid3[Math.floor(i / 3)][i % 3] = i % 3;
}
console.log('Grid3: ', grid3);

logGreen('Given a grid like the previous ones, write a for loop that would change every number to an x.');
for (i = 0; i < 9; i++) {
  grid3[Math.floor(i / 3)][i % 3] = 'x';
}
console.log('Grid3: ', grid3, ', after the "x" transform');
