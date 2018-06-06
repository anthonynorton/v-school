const startTime = Date.now();
const input = 'bodkkeeper larry';

const results = input.split('').reduce((results, char) => {
  if (!results.keep.includes(char) || char === ' ') {
    results.keep += char;
  } else {
    results.dupeplicates += char;
  }
  return results
}, {keep: '', dupeplicates: ''});

console.log(results);

console.log(Date.now() - startTime);
return results;
