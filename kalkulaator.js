let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(selectedOperation) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = selectedOperation;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case 'liida':
            result = prev + current;
            break;
        case 'lahuta':
            result = prev - current;
            break;
        case 'korruta':
            result = prev * current;
            break;
        case 'jaga':
            if (current === 0) {
                result = 'Viga: Nulliga jagamine pole lubatud.';
                break;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentNumber;
}

// Algväärtustus
updateDisplay();
