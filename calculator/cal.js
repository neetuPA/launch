/*let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function performOperation(op) {
  previousNumber = currentNumber;
  currentNumber = '';
  operation = op;
  display.value = previousNumber + '' + operation;
}

function calculate() {
  let result = 0;
  switch (operation) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  display.value = result;
  currentNumber = result;
  previousNumber = '';
  operation = '';
}

function clearDisplay() {
  display.value = '';
  currentNumber = '';
  previousNumber = '';
  operation = '';
}*/













let data= document.getElementById('display');
function appendNumber(a){
data.value+=a;
}
function calculate(){
    let num=data.value;
    let total=eval(num);
    data.value=total;

}
function clearDisplay(){
    data.value="";
    
}