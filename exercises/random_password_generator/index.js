const assert = require('assert')

// (Math.random() * MAX - MIN) + MIN

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const reUpper = RegExp(`[${upper}]+`, 'gi')
const lower = 'abcdefghijklmnopqrstuvwxyz'
const reLower = RegExp(`[${lower}]+`, 'gi')
const nums = '0123456789'
const reNums = RegExp(`[${nums}]+`, 'gi')
const symbols = `()\`~!@#$%^&*_-+=|\{}[]:;"'<>,.?/`
const symArray = symbols.split('')
charset = `${upper}${lower}${nums}${symbols}`

function generatePassword(passLen) {
  let pw = ''
  if (typeof passLen === 'number' && !isNaN(passLen) && passLen >= 6) {
    const arr = Array(passLen).fill(0)
    do {
      pw = arr
        .map(el => {
          var randomNum = Math.floor(Math.random() * charset.length)
          return charset[randomNum]
        })
        .join('')
    } while (
      !reUpper.test(pw) ||
      !reLower.test(pw) ||
      !reNums.test(pw) ||
      !symArray.some(char => charset.includes(char))
    )
    return pw
  } else {
    console.log(
      `\n\x1b[31mError: \x1b[32mgeneratePassword\x1b[31m expects a \x1b[32mpositive integer\x1b[31m greater than 6. Actual arguement: \x1b[31m${passLen}\x1b[0m\n`,
    )
    return false
  }
}

module.exports = generatePassword
