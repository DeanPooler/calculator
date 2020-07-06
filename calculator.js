let diplayValue;
let storedValue;
let currentOperator;

function operate(operator, x, y) {
    switch (operator) {
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '+':
            return x = y;
        case '-':
            return x - y;
        default:
            break;
    }
}

function populate() {
    const display = document.getElementById('#display');
    const buttons = document.querySelectorAll('numerical');

    buttons.forEach((button) => {
        
        button.addEventListener('click', () => {
            alert(button.id);
        });
    });
    
}