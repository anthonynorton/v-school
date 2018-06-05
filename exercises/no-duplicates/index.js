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

return results;
