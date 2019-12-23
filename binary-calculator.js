let firstNumber = '';
let secondNumber = '';
let operation = '';
let result = '';

function clearDisplay() {
	res.innerText = '';
}
function setDisplay(d) {
	res.innerText = res.innerText + d;
}
function setOperation(o) {
	firstNumber = res.innerText;
	operation = o;
}

btn0.addEventListener('click', event => {
	setDisplay(0);
});
btn1.addEventListener('click', event => {
	setDisplay(1);
});
btnClr.addEventListener('click', event => {
	clearDisplay();
});
btnSum.addEventListener('click', event => {
	setOperation('sum');
	setDisplay('+');
});
btnSub.addEventListener('click', event => {
	setOperation('sub');
	setDisplay('-');
});
btnMul.addEventListener('click', event => {
	setOperation('mul');
	setDisplay('*');
});
btnDiv.addEventListener('click', event => {
	setOperation('div');
	setDisplay('/');
});

btnEql.addEventListener('click', event => {
	secondNumber = res.innerText.slice(firstNumber.length + 1);
	clearDisplay();
	switch (operation) {
		case 'sum':
			result = parseInt(firstNumber,2) + parseInt(secondNumber,2);
			break;
		case 'sub':
			result = parseInt(firstNumber,2) - parseInt(secondNumber,2);
			break;
		case 'mul':
			result = parseInt(firstNumber,2) * parseInt(secondNumber,2);
			break;
		case 'div':
			result = parseInt(firstNumber,2) / parseInt(secondNumber,2);
			break;
		default:
			clearDisplay();
			break;
	}

	setDisplay(result.toString(2));
});
