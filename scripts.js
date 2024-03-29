console.log("Pepega")
let displayValue = 0
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
but = document.querySelectorAll('button')


but.forEach(button => {
    button.addEventListener('click', function() {
        console.log(button.value)
        if(button.className == 'operator'){
            inputOperator(button.value)
        }
        else if(button.className == 'operand'){
            inputOperand(button.value)
        }
        else if(button.className == 'clear'){
            clear()
        }
        else if(button.className == 'sign'){
            inputSign()
            updateDisp()
        }
        else if(button.className == 'zero'){
            inputOperand(button.value)
        }
        else if(button.className == 'decimals'){
            inputDecimal(button.value)
            updateDisp()
        }
        else if(button.className == 'percent'){
            percentOp(displayValue)
        }
        else{
            inputEqual()
        }
    });
  });

function updateDisp(){
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

updateDisp()

function inputOperator(operator){
    if(firstOperator != null){
        secondOperand = displayValue
        result = calc(Number(firstOperand), Number(secondOperand), firstOperator)
        displayValue = result.toString()
        firstOperand = displayValue
        firstOperator = operator
        result = null
    }
    else{
        firstOperator = operator
        firstOperand = displayValue
    }
    updateDisp()
}

function calc(num1, num2, op){
    if(op === '+'){
        return num1+num2
    }
    if(op === '*'){
        return num1*num2
    }
    if(op === '-'){
        return num1-num2
    }
    if(op === '/'){
        if(num2 === 0)
            return "ERR"
        return num1/num2
    }
}

function percentOp(num){
    displayValue = (num/100).toString()
    updateDisp()
}

function inputOperand(operand){
    if(firstOperator === null){
        if(displayValue === 0 || displayValue === '0'){
            displayValue = operand
        }
        else if(displayValue === firstOperand){
            displayValue = operand
        }
        else{
            displayValue += operand
        }
    }
    else{
        if(displayValue == firstOperand)
            displayValue = operand
        else
            displayValue += operand
    }
    updateDisp()
}

function clear(){
    displayValue = 0
    firstOperand = null
    firstOperator= null
    secondOperator = null
    updateDisp()
}

function inputSign(){
    displayValue = (displayValue*-1).toString()
}

function inputEqual(){
    if(firstOperator == null)
    {}
    else if(displayValue == firstOperand){
        result = calc(Number(firstOperand), Number(firstOperand), firstOperator)//.tofixed(9)
        displayValue = result
        updateDisp()
        result = null
        firstOperand = null
        firstOperator= null
        secondOperator = null
    }
    else{
        secondOperand = displayValue;
        result = calc(Number(firstOperand), Number(secondOperand), firstOperator)
        result = result.toFixed(9)
        console.log(result)
        displayValue = result
        updateDisp()
        result = null
        firstOperand = null
        firstOperator= null
        secondOperator = null
    }
}

function inputDecimal(dot) {
    if(displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot;
    } else if(!displayValue.includes(dot)) {
        displayValue += dot;
    } 
}