if (5 > 3) {
  console.log('is greater than');
}

if ('cat'.length === 3) {
  console.log('is the length');
}

if ('cat' === 'dog') {
  console.log('WFT!!!');
} else {
  console.log('not the same');
}

var person = {
  name: "Bobby",
  age: 12
}

if (person.age >= 18) {
  console.log(`${person.name} is allowed to go to the movie`);
} else {
  console.log(`${person.name} is NOT allowed to go to the movie`); 
}

if (person.name.substr(0,1) === 'B') {
  console.log(`${person.name} is allowed to go to the movie`);
} else {
  console.log(`${person.name} is NOT allowed to go to the movie`);
}

if (1 === '1') {
  console.log('strict');
} else if (1 == '1') {
  console.log(  parseInt(Math.random() * 100, 10) % 2 === 0 ? 'abstract' : 'loose' );
}

if (1 <= 2 && 1 === 4 || 3*4 > 10 && 5 + 10 > 10) {
  console.log('yes');
}

if (typeof 'dog' === 'string') {
  console.log('Yes, "dog" is a string.');
}

if ('true') {
  console.log('Yes, "true" is truthy.');
}

try {
  if (someVar != undefined) {
    console.log('"someVar" was not defined');
  } else {
    console.log('"someVar" was defined');
  }
} catch(e) {
  console.log('It was not defined.', '\n', '\x1b[31m', e, '\x1b[0m');
}

if ('s' > 12) {
  console.log('"s" is > 12');
} else {
  console.log('12 is > "s"');
}