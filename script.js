
function calculate(operator) {

    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    let result;

    if (isNaN(a) || isNaN(b)) {
        result = "Please enter both numbers";
    }
    else {
        switch (operator) {

            case '+':
                result = a + b;
                break;

            case '-':
                result = a - b;
                break;

            case '*':
                result = a * b;
                break;

            case '/':
                result = b === 0 ? "Cannot divide by zero" : a / b;
                break;
        }
    }

    document.getElementById("result").innerText =
        "Result: " + result;
}
