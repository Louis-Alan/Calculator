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
            console.log("operand")
        }
        else if(button.className == 'clear'){
            console.log("clear")
        }
        else if(button.className == 'sign'){
            console.log("sign")
        }
        else if(button.className == 'zero'){
            console.log("zero")
        }
        else if(button.className == 'decimals'){
            console.log("decimals")
        }
        else{
            console.log("equals")
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
        secondOperator = operator
        secondOperand = displayValue
        result = calc(Number(firstOperand), Number(secondOperand), firstOperator)
        displayValue = result.toString()
        firstOperand = displayValue
        result = null
    }
    else{
        firstOperator = operator
        firstOperand = displayValue
    }
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