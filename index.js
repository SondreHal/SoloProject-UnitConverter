const numberInput = document.getElementById('number_input');
const btnConvert = document.getElementById('btn_convert');

const meters = document.getElementById('meters');
const feet = document.getElementById('feet');

const liters = document.getElementById('liters');
const gallons = document.getElementById('gallons');

const kilos = document.getElementById('kilos');
const pounds = document.getElementById('pounds');

window.onload = () => {
	focusInput();
	convertValue();
};

const focusInput = () => {
	numberInput.focus();

	// TO PUT CURSOR AT END OF INPUT FIELD
	var val = numberInput.value; //STORE VALUE OF INPUT
	numberInput.value = ''; //CLEAR VALUE OF INPUT
	numberInput.value = val; //SET THE VALUE BACK
};

// TO PREVENT KEYBOARD TO POP UP ON MOBILE WHEN CLICKING 'CONVERT'
btnConvert.addEventListener('pointerup', (e) => {
	if (e.pointerType !== 'mouse') {
		return;
	} else {
		focusInput();
	}
});

// TO HAVE ENTER AS 'CONVERT' OPTION
numberInput.addEventListener('keydown', (e) => {
	if (e.code === 'Enter') {
		convertValue();
	}
});

// USES INPUT VALUE AS BASE FOR UNITS,
// CONVERTING THEM FROM METRIC -> IMPERIAL UNITS AND VICE VERSA
function convertValue() {
	let valueInput = numberInput.value;

	// TO ALWAYS HAVE A NUMBER TO CONVERT
	if (valueInput === '') {
		valueInput = 0;
	}

	// TEXT EDITOR IN RELATION TO INPUT VALUE
	meters.textContent = `${valueInput} meter(s) = ${(valueInput * 3.28084).toFixed(2)} feet`;
	feet.textContent = `${valueInput} feet = ${(valueInput * 0.3048).toFixed(2)} meter(s)`;

	liters.textContent = `${valueInput} liter(s) = ${(valueInput * 0.264172).toFixed(2)} gallon(s)`;
	gallons.textContent = `${valueInput} gallon(s) = ${(valueInput * 3.78541).toFixed(2)} liter(s)`;

	kilos.textContent = `${valueInput} kilo(s) = ${(valueInput * 2.20462).toFixed(2)} pound(s)`;
	pounds.textContent = `${valueInput} pound(s) = ${(valueInput * 0.453592).toFixed(2)} kilo(s)`;
}
