for (let i = 0; i <= 101; i++) {
  if (i % 2 === 0) {
    console.log(`${i}: \x1b[31mEven\x1b[0m`);
  } else {
    console.log(`${i}: \x1b[32mOdd\x1b[0m`);
  }
}

