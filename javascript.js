let firstValue = ''
let secondValue = ''
let operation = ''
const clear = ''
let history=[]

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
    input.value = sum(firstValue, secondValue)
  }
  if (operation === '-') {
    input.value = sub(firstValue, secondValue)
  }
  if (operation === '*') {
    input.value = mul(firstValue, secondValue)
  }
  if (operation === '/') {
    input.value = div(firstValue, secondValue)
  }
  if (operation === '%') {
    input.value = percentage(firstValue)
  }
  if (operation === 'x²') { // alt 2 5 3 release alt ²
    input.value = square(firstValue)
  }
  if (operation === '√x') { // alt 2 5 1 release alt √
    input.value = sqRoot(firstValue)
  }
  if (operation === 'sin') {
    input.value = sin(firstValue)
  }
  if (operation === 'cos') {
    input.value = cos(firstValue)
  }
  if (operation === 'tan') {
    input.value = tan(firstValue)
  }
  if (operation === '1/x') {
    input.value = oneBy(firstValue)
  }
  console.log(firstValue)
  console.log(secondValue)
  console.log(operation)
  console.log(input.value)
  addToHistory()
}
function allClear (clear) {
  const input = document.getElementById('total')
  input.value = ''
  clear = input.value
  addToHistory(' ');
}
function sum (firstValue, secondValue) {
  return parseFloat(firstValue) + parseFloat(secondValue)
}
function sub (firstValue, secondValue) {
  return parseFloat(firstValue) - parseFloat(secondValue)
}
function mul (firstValue, secondValue) {
  return parseFloat(firstValue) * parseFloat(secondValue)
}
function div (firstValue, secondValue) {
  return parseFloat(firstValue) / parseFloat(secondValue)
}
function sin (firstValue) {
  return Math.sin(firstValue)
}
function cos (firstValue) {
  return Math.cos(firstValue)
}
function tan (firstValue) {
  return Math.tan(firstValue)
}
function percentage (firstValue) {
  return parseFloat(firstValue) / 100
}
function square (firstValue) {
  return parseFloat(firstValue) * parseFloat(firstValue)
}
function sqRoot (firstValue) {
  return Math.sqrt(firstValue)
}
function oneBy (firstValue) {
  return 1 / firstValue
}

function addToHistory(){
  
  history.push(firstValue+operation+secondValue+ '=' +document.getElementById('total').value)
  document.getElementById('history').innerText = history
}
