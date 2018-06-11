// Write a function that takes an array of numbers and returns the largest(without using Math.max())
// largest([3, 5, 2, 8, 1]) // => 8
const largest = arrOfNums =>
  arrOfNums.reduce((lg, num) => (lg > num ? lg : num), Number.NEGATIVE_INFINITY)

// Write a function that takes an array of words and a character and return each word that has that letter present.
// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]
const wordsWithLetter = (arr, char) => arr.filter(word => word.includes(char))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false
const isDivisible = (n1, n2) => n1 % n2 === 0
