document.getElementById("initialNum").value = 0;

function update() {
   let num1 = document.getElementById("initialNum").value;

   document.getElementById("meters1").textContent = num1;
   document.getElementById("feet1").textContent = num1;
   document.getElementById("liters1").textContent = num1;
   document.getElementById("gallons1").textContent = num1;
   document.getElementById("kilos1").textContent = num1;
   document.getElementById("pounds1").textContent = num1;

   let meters = num1 * 3.28084;
   let feet = num1 * 0.3048;
   let liters = num1 * 0.264172;
   let gallons = num1 * 3.78541;
   let kilos = num1 * 2.20462;
   let pounds = num1 * 0.453592;

   document.getElementById("meters2").textContent = meters.toFixed(3);
   document.getElementById("feet2").textContent = feet.toFixed(3);
   document.getElementById("liters2").textContent = liters.toFixed(3);
   document.getElementById("gallons2").textContent = gallons.toFixed(3);
   document.getElementById("kilos2").textContent = kilos.toFixed(3);
   document.getElementById("pounds2").textContent = pounds.toFixed(3);
}

update();
