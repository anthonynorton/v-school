const calcElem = document.getElementById('calculator');

function createSub(options) {
  const div = document.createElement('div');
  div.className = `calc-sub sub-${options.operation}`;
  div.setAttribute('name', options.operation);
  div.innerHTML = `
      <input class="calc-input input-one" type="text" name="${options.operation}One">
      <span class="calc-operator" >${options.operator}</span>
      <input class="calc-input input-two" type="text" name="${options.operation}Two">
      <span class="calc-equals" >=</span>
      <div id="${options.operation}-result" class="calc-result sum"></div>`;
  const input1 = div.querySelector('.input-one');
  const input2 = div.querySelector('.input-two');
  const result = div.querySelector('.calc-result');
  const equals = div.querySelector('.calc-equals');
  equals.addEventListener('click', e => result.innerHTML = options.fn(input1.value, input2.value));
  return div;
}

const optionsList = [
  { operation: 'add', operator: '+', fn: (val1, val2) => Number(val1) + Number(val2) },
  { operation: 'sub', operator: '-', fn: (val1, val2) => Number(val1) - Number(val2) },
  { operation: 'mul', operator: 'x', fn: (val1, val2) => Number(val1) * Number(val2) },
];

optionsList.forEach(set => calcElem.appendChild(createSub(set)))