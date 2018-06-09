function fizzbuzz(n) {
  if (isNaN(n)) return;
  const num = Number(n);
  return Array(num).fill(0).map((elem, index) => {
    const num = index + 1;
    let fizzbuzz = num % 3 === 0 ? 'fizz' : '';
    fizzbuzz += num % 5 === 0 ? 'buzz' : '';
    return fizzbuzz.length > 0 ? fizzbuzz : num;
  });
}

// If called from command line and has a number input argument run the
// function with that input
if (process && !isNaN(process.argv[2])) {
  console.log(fizzbuzz(process.argv[2]))
  return fizzbuzz(process.argv[2]);
}

module.exports = fizzbuzz;