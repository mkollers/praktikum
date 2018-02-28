var numbers = [];
var operators = [];

function clickNumber(number) {
    numbers.push(number);
    document.getElementById('textbox').value += number + ' ';
    ''.substring()
}

function clickOperator(operator) {
    operators.push(operator);
    console.log(operators);
}

function getResult() {
    if (numbers.length === 0) {
        return;
    }
    var result = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        var op = operators[0];
        operators = operators.slice(1);

        switch (op) {
            case '+':
                result += numbers[i];
                break;
            case '-':
                result -= numbers[i];
                break;
            case '*':
                result *= numbers[i];
                break;
            case '/':
                result /= numbers[i];
                break;
            default:
                console.log('unknown operator');
                break;
        }
    }
    console.log(result);
    operators = [];
    numbers = [];
}