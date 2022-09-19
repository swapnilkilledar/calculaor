let firstValue = ''
let secondValue = ''
let operation = ''
const clear = ''
function display (val) {
  const input = document.getElementById('total')
  if (val === '.' && input.value.includes('.')) {
  } else {
    input.value += val
  }
}
function calc (oper) {
  const input = document.getElementById('total')
  firstValue = input.value
  input.value = ''
  operation = oper
}
function result () {
  const input = document.getElementById('total')
  secondValue = input.value
  if (operation === '+') {
    input.value = parseFloat(firstValue) + parseFloat(secondValue)
  }
  if (operation === '-') {
    input.value = parseFloat(firstValue) - parseFloat(secondValue)
  }
  if (operation === '*') {
    input.value = parseFloat(firstValue) * parseFloat(secondValue)
  }
  if (operation === '/') {
    input.value = parseFloat(firstValue) / parseFloat(secondValue)
  }
  if (operation === '%') {
    input.value = firstValue / 100
  }
  if (operation === 'x²') {   //alt 2 5 3 release alt ²
    input.value = firstValue * firstValue
  }
  if (operation === '√x') {   //alt 2 5 1 release alt √
    input.value = Math.sqrt(firstValue)
  }
  if (operation === 'sin') {
    input.value = Math.sin(firstValue)
  }
  if (operation === 'cos') {
    input.value = Math.cos(firstValue)
  }
  if (operation === 'tan') {
    input.value = Math.tan(firstValue)
  }
  if (operation == '1/x') {
   input.value = 1/firstValue
 }
  console.log(secondValue)
  console.log(firstValue)
  console.log(operation)
  console.log(input.value)
}
function allClear (clear) {
  const input = document.getElementById('total')
  input.value = ''
  clear = input.value
  console.log(input.value)
}
