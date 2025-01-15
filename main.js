

function showScientificCalculator(){

    document.getElementById('simpleCalculator').style.display = 'none';
    document.getElementById('scientificCalculator').style.display = 'block';
}


var inputFieldSci = document.getElementById("inputFieldSci");
var resultFieldSci = document.getElementById("resultFieldSci"); 
var calculatorOnOrOffSci = false;
var inputFieldSciLength = 15;

function turnOnSci() {
    calculatorOnOrOffSci = true;
    inputFieldSci.value = "0";
    resultFieldSci.value = ""; 
}

function turnOffSci() {
    calculatorOnOrOffSci = false;
    inputFieldSci.value = "";
    resultFieldSci.value = ""; 
}

function clearLastValueSci() {
    if (calculatorOnOrOffSci) {
        if (inputFieldSci.value.length > 1) {
            inputFieldSci.value = inputFieldSci.value.slice(0, -1);
        } else {
            inputFieldSci.value = "0";
        }
    }
}

function allClearSci() {
    if (calculatorOnOrOffSci) {
        inputFieldSci.value = "0";
        resultFieldSci.value = ""; 
    }
}



function inputDigitSci(num) {
    if (calculatorOnOrOffSci) {
        if (inputFieldSci.value === "0") {
            inputFieldSci.value = "";
        }
        if (inputFieldSci.value.length < inputFieldSciLength) {
            inputFieldSci.value += num;
        } else {
            inputFieldSci.value = "Error: Input limit reached";
        }
    }
}

function inputOperatorSci(opr) {
    if (calculatorOnOrOffSci) {
        if (inputFieldSci.value.length < inputFieldSciLength) {
            let currentValue = inputFieldSci.value;

            if (/[+\-*/%]$/.test(currentValue)) {
                inputFieldSci.value = currentValue.slice(0, -1) + opr;
            } else {
                inputFieldSci.value += opr;
            }
        } else {
            inputFieldSci.value = "Error: Input limit reached";
        }
    }
}

function sqRoot() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num) || num < 0) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.sqrt(num);
            resultFieldSci.value = result;
        }
    }
}

function cubeRoot() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num)) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.cbrt(num);
            resultFieldSci.value = result;
        }
    }
}




function cubePow() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num)) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.pow(num, 3);
            resultFieldSci.value = result;
        }
    }
}

function sqPow() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num)) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.pow(num, 2);
            resultFieldSci.value = result;
        }
    }
}

function eulerExp() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num)) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.exp(num);
            resultFieldSci.value = result;
        }
    }
}

function powerOfTen() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num)) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.pow(10, num);
            resultFieldSci.value = result;
        }
    }
}

function calculateSin() {
    if (inputFieldSci.value) {
        let angle = parseFloat(inputFieldSci.value);
        
        if (isNaN(angle)) {
            resultFieldSci.value = "Error";
        } else {

            let angleType;
            if (document.getElementById("degree").checked) {
                angleType = "degree";
            } else {
                angleType = "radian";
            }
            

            if (angleType === "degree") {
                angle = angle * (Math.PI / 180); 
            }
            

            let result = Math.sin(angle);
            resultFieldSci.value = result;
        }
    }
}
function calculateCos() {
    if (inputFieldSci.value) {
        let angle = parseFloat(inputFieldSci.value);
        
        if (isNaN(angle)) {
            resultFieldSci.value = "Error";
        } else {
            let angleType;
            if (document.getElementById("degree").checked) {
                angleType = "degree";
            } else {
                angleType = "radian";
            }
            
        
            if (angleType === "degree") {
                angle = angle * (Math.PI / 180); 
            }
            
    
            let result = Math.cos(angle);
            resultFieldSci.value = result;
        }
    }
}
function calculateTan() {
    if (inputFieldSci.value) {
        let angle = parseFloat(inputFieldSci.value);
        
        if (isNaN(angle)) {
            resultFieldSci.value = "Error";
        } else {

            let angleType;
            if (document.getElementById("degree").checked) {
                angleType = "degree";
            } else {
                angleType = "radian";
            }
            

            if (angleType === "degree") {
                angle = angle * (Math.PI / 180); 
            }
            
            let result = Math.tan(angle);
            resultFieldSci.value = result;
        }
    }
}



function pi() {
    if (calculatorOnOrOffSci) {
        var num = parseFloat(inputFieldSci.value)
        if (isNaN(num) || num<=0) {
            var result = Math.PI;
            inputFieldSci.value = "π";
            resultFieldSci.value = result;
        } else {
            inputFieldSci.value = num + "π";
            resultFieldSci.value = num * Math.PI;
    
    
    }
}
}

function euler() {
    if (calculatorOnOrOffSci) {
        var num = parseFloat(inputFieldSci.value)
        if (isNaN(num) || num<=0) {
            var result = Math.E;
            inputFieldSci.value = "e";
            resultFieldSci.value = result;
        } else {
            inputFieldSci.value = num + "e";
            resultFieldSci.value = num * Math.E;
    
    
    }
}
}
function ln() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num) || num <= 0) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.log(num);
            resultFieldSci.value = result;
        }
    }
}

function log() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num) || num <= 0) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = Math.log10(num);
            resultFieldSci.value = result;
        }
    }
}

function inverse() {
    if (calculatorOnOrOffSci) {
        let num = parseFloat(inputFieldSci.value);
        if (isNaN(num) || num === 0) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = 1 / num;
            resultFieldSci.value = result;
        }
    }
}

function openBracket() {
    if (calculatorOnOrOffSci) {
        inputFieldSci.value += "(";
    }
}

function closeBracket() {
    if (calculatorOnOrOffSci) {
        inputFieldSci.value += ")";
    }
}

function factorial() {
    if (calculatorOnOrOffSci) {
        let num = parseInt(inputFieldSci.value);
        if (isNaN(num) || num < 0) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            resultFieldSci.value = result.toString();
        }
    }
}

var baseNumber = null;
var powerValue = false;
function anyPow() {
    if (calculatorOnOrOffSci) {
        baseNumber = parseFloat(inputFieldSci.value);
        if (isNaN(baseNumber)) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            powerValue = true;
            inputFieldSci.value = "";
        }
    }
}



function calculateSci() {
    if(calculatorOnOrOffSci){
        var result = eval(inputFieldSci.value);
        if (powerValue) {
            var exponent = parseFloat(inputFieldSci.value);
            if (!isNaN(baseNumber) && !isNaN(exponent)) {
                result = Math.pow(baseNumber, exponent);
            }
            powerValue = false;
        }
        else if(exponentiationValue){
            var exponent = parseFloat(inputFieldSci.value);
            if (!isNaN(baseNumber) && !isNaN(exponent)) {
                result = baseNumber * Math.pow(10, exponent);
            }
            exponentiationValue= false;
        }
        resultFieldSci.value = result
    
}
}
var exponentiationValue = false;

function exponentiation() {
    if (calculatorOnOrOffSci) {
        baseNumber = parseFloat(inputFieldSci.value);
        if (isNaN(baseNumber)) {
            inputFieldSci.value = "Error";
            resultFieldSci.value = "Error";
        } else {
            exponentiationValue = true;
            inputFieldSci.value = "";
        }
    }
}


// simple 
function showSimpleCalculator(){

    document.getElementById('simpleCalculator').style.display = 'block';
    document.getElementById('scientificCalculator').style.display = 'none';

}
    

    var inputField = document.getElementById("inputField");
var calculatorOnOrOff = false;
let inputFieldLength = 15;

function turnOn() {
    calculatorOnOrOff = true;
    inputField.value = "0";
}

function turnOff() {
    calculatorOnOrOff = false;
    inputField.value = "";
}

function inputDigit(num) {
    if (calculatorOnOrOff) {
        if (inputField.value === "0") {
            inputField.value = "";
        }
        if (inputField.value.length < inputFieldLength) {
            inputField.value += num;
        } else {
            inputField.value = "Error: Input limit reached";
        }
    }
}

function inputOperator(opr) {
    if (calculatorOnOrOff) {
        if (inputField.value.length < inputFieldLength) {
            let currentValue = inputField.value;

            // Check if the last character is an operator
            if (/[+\-*/]$/.test(currentValue)) {
                // Replace the last operator with the new operator
                inputField.value = currentValue.slice(0, -1) + opr;
            } else {
                // Append the new operator if it's a valid one
                if (opr === "+" || opr === "-" || opr === "*" || opr === "/") {
                    inputField.value += opr;
                } else {
                    inputField.value = "Error: Invalid operator";
                }
            }
        } else {
            inputField.value = "Error: Input limit reached";
        }
    }
}

function calculate() {
    if (calculatorOnOrOff) {
        var result = eval(inputField.value);
        inputField.value = result;
    }
}

function clearLastValue() {
    if (calculatorOnOrOff) {
        if (inputField.value.length > 1) {
            inputField.value = inputField.value.slice(0, -1);
        } else {
            inputField.value = "0";
        }
    }
}

function allClear() {
    if (calculatorOnOrOff) {
        inputField.value = "0";
    }
}

function root() {
    if (calculatorOnOrOff) {
        var num = parseFloat(inputField.value);
        if (!(num) || num < 0) {
            inputField.value = "Error";
        } else {
            var result = Math.sqrt(num);
            inputField.value = result;
        }
    }
}

function percentOperator() {
    if (calculatorOnOrOff) {
        var num = parseFloat(inputField.value);
        if (!(num)) {
            inputField.value = "Error";
        } else {
            inputField.value = (num / 100); // Limit the precision
        }
    }
}


    var clickSound = new Audio('sound/button-9(chosic.com).mp3');

    function playSound() {

        clickSound.play();  

    }