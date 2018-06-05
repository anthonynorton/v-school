let filename = __filename.substr(__filename.lastIndexOf('/') + 1)
if (process.argv.length === 2 || process.argv[2] === 'help') {
  const help = `\nUSAGE:\n\n  node ${filename} <\x1b[31mobscure\x1b[0m|\x1b[31mdecipher\x1b[0m> <\x1b[32mmessage\x1b[0m>\n`;
  console.log(help);
  return;
}

const scramble = {
  obscure: function obscure(msg) {
    return msg.split(' ').map(word => this._obscure(word)).join(' ');
  },

  _obscure: function __obscure(word) {
    return word.split('').map(char => this.offset(char)).join('');
  },

  offset: function offset(char, down) {
    if (/[ \t\n]/.test(char)) {
      return char;
    }
    return String.fromCharCode(char.charCodeAt() + (down ? 10 : -10));
  },

  decipher: function decipher(msg) {
    return msg.split('').map(char => this.offset(char, true)).join('');
  },
};

let operation = '';
let input = '';
const warnings = [];

if (/(obscure|decipher)/.test(process.argv[2])) {
  operation = process.argv[2];
} else {
  warnings.push(`The first argument passed to \x1b[32m${filename}\x1b[0m must be \x1b[31mobscure\x1b[0m or \x1b[31mdecipher\x1b[0m.`);
}

if (process.argv.length > 3) {
  input = process.argv.slice(3).join(' ');
} else {
  warnings.push(`\x1b[31mThere must be additional parameters, which constitute a message to be opperated on.\x1b[0m`);
}

if (warnings.length > 0) {
  warnings.forEach(warning => console.log(warning));
  return;
}

const output = scramble[operation](input);
const color = operation === 'obscure' ? '\x1b[31m' : '\x1b[32m';

console.log(`\n${color}${output}\x1b[0m\n`);