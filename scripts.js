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
        if(button.className == 'operator'){
            console.log("hihii")
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

function oper(op){

}