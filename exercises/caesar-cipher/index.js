const readline = require('readline-sync')
const assert = require('assert')

const caesarCipher = (msg, offset) =>
  msg
    .toLowerCase()
    .split('')
    .map(char => {
      if (!/[a-z]+/.test(char)) {
        return char
      }
      const validatedOffset = offset % 26
      const startCode = char.charCodeAt()
      let newCode = startCode + validatedOffset
      if (validatedOffset > 0) {
        while (newCode > 122) {
          newCode = newCode - 122 + 97
        }
      } else {
        while (newCode < 97) {
          newCode = newCode + 122 - 96
        }
      }
      return String.fromCharCode(newCode)
    })
    .join('')

assert.strictEqual(
  caesarCipher('abc', 3),
  'def',
  'Input "abc", 3 expects "def".',
)
assert.strictEqual(
  caesarCipher('I am a full stack web dev', 107),
  'l dp d ixoo vwdfn zhe ghy',
  'Given input "I am a full stack web dev", 107 expects "l dp d ixoo vwdfn zhe ghy"',
)
assert.strictEqual(
  caesarCipher('abc', -3),
  'xyz',
  'Given input "abc", -3 expects "xyz"',
)

const input = readline
  .question('What phrase would you like to encrypt? ')
  .toLowerCase()
const shift = parseInt(
  readline.question('How many letters would you like to shift? '),
)

console.log(caesarCipher(input, shift))
