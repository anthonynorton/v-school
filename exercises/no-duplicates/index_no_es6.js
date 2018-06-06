const startTime = Date.now();
var input = "return maximum occurring character in the input string in java";
var results = {
  save: '',
  dupe: '',
};

for (var i = 0; i < input.length; i++) {
  if (input[i] === ' ') {
    results.save += input[i];
    results.dupe += input[i];
  } if (results.save.indexOf(input[i]) === -1) {
    results.save += input[i];
  } else {
    results.dupe += input[i];
  }
};

console.log(results);

console.log(Date.now() - startTime);
return results;
