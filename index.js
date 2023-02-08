const numberInput = document.getElementById('number_input');

const meters = document.getElementById('meters');
const feet = document.getElementById('feet');

const liters = document.getElementById('liters');
const gallons = document.getElementById('gallons');

const kilos = document.getElementById('kilos');
const pounds = document.getElementById('pounds');

const focusInput = () => {
	numberInput.focus();

	// TO PUT CURSOR AT END OF INPUT FIELD
	var val = numberInput.value; //STORE VALUE OF INPUT
	numberInput.value = ''; //CLEAR VALUE OF INPUT
	numberInput.value = val; //SET THE VALUE BACK
};
window.onload = focusInput();

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

	//Edits the values of the meter unit based on the input
	meters.textContent = `${valueInput} meters = ${(valueInput * 3.28084).toFixed(2)} feet`;
	feet.textContent = `${valueInput} feet = ${(valueInput * 0.3048).toFixed(2)} meters`;

	//Edits the values of the liter unit based on the input
	liters.textContent = `${valueInput} liters = ${(valueInput * 0.264172).toFixed(2)} gallons`;
	gallons.textContent = `${valueInput} gallons = ${(valueInput * 3.78541).toFixed(2)} liters`;

	//Edits the values of the kilo unit based on the input
	kilos.textContent = `${valueInput} kilos = ${(valueInput * 2.20462).toFixed(2)} pounds`;
	pounds.textContent = `${valueInput} pounds = ${(valueInput * 0.453592).toFixed(2)} kilos`;
}

convertValue();
