let expression = '';

function appendNumber(number) {
    expression += number;
    document.getElementById("expression").value = expression;
}

function appendOperator(operator) {
    expression += operator;
    document.getElementById("expression").value = expression;
}

function clearExpression() {
    expression = '';
    document.getElementById("expression").value = expression;
}

function calculate() {
    fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("expression").value = data.result;
        expression = ''; // Reset after calculation
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error in calculation");
        clearExpression();
    });
}
