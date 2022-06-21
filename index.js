// Puts initial values of the different units in variables
let meter = document.getElementById("meter");
let liter = document.getElementById("liter");
let kilo = document.getElementById("kilo");

// Function that constantly updates the values of the units based on the input
function update() {
	// Puts the top value of the converter in an variable
	let num1 = document.getElementById("initialNum").value;

	//if statement that says if num1 is blank then num1 will be 1
	if (num1 === "") {
		num1 = 1;
	}

	//Edits the values of the meter unit based on the input
	meter.textContent = `${num1} meters = ${(num1 * 3.28084).toFixed(3)} feet |
   ${num1} feet = ${(num1 * 0.3048).toFixed(3)} meters`;

	//Edits the values of the liter unit based on the input
	liter.textContent = `${num1} liters = ${(num1 * 0.264172).toFixed(3)} gallons |
   ${num1} gallons = ${(num1 * 3.78541).toFixed(3)} liters`;

	//Edits the values of the kilo unit based on the input
	kilo.textContent = `${num1} kilos = ${(num1 * 2.20462).toFixed(3)} pounds |
   ${num1} pounds = ${(num1 * 0.453592).toFixed(3)} kilos`;
}

update();
