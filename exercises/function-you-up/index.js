function arrayToString(arr) {
  console.log(arr.join(' '));
}

function arrayToReverseString(arr) {
  console.log([...arr].reverse().join(' '));
}

function printEvenNumbers(arr) {
  console.log(arr.filter((word, i) => i % 2 === 0).join(' '));
}

function printEveryTwoReversed(arr) {
  const copy = arr.slice();
  let temp = '';
  for (let i = 0; i < copy.length; i += 2) {
    temp = copy[i];
    copy[i] = copy[i+1];
    copy[i+1] = temp;
  }
  console.log(copy.join(' '));
}

var lyrics = ["This", "hit", "that", "ice", "cold",
  "Michelle", "Pfeiffer", "that", "white",
  "gold", "This", "one", "for", "them",
  "hood", "girls", "Them", "good", "girls",
  "straight", "masterpieces", "Stylin'",
  "whilen'", "livin'", "it", "up", "in",
  "the", "city", "Got", "Chucks", "on",
  "with", "Saint", "Laurent", "Gotta", "kiss",
  "myself", "I'm", "so", "pretty"];

printEveryTwoReversed(lyrics);

module.exports = {
  arrayToString,
  arrayToReverseString,
  printEvenNumbers,
  printEveryTwoReversed,
};
