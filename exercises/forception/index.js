// Using a for loop within a for loop create an array that looks like this when printed to the console:

// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Here's the array of names and the alphabet to get you started:

// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
// var alphabet = "abcdefghijklmnopqrstuvwxyz";

let forception = () => {
  const names = ['Jon', 'Jacob', 'Jingle', 'Heimer', 'Schmidt']
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const alphaUpper = alphabet.split('').map(char => char.toUpperCase())
  const result = []

  for (let i = 0; i < names.length; i++) {
    result.push(names[i])
    for (let j = 0; j < alphaUpper.length; j++) {
      result.push(alphaUpper[j])
    }
  }

  return result
}

forception()
