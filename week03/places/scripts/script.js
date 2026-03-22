// Footer
document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

// Weather values
const temp = 8;
const wind = 10;

// Function (ONE LINE)
function calculateWindChill(t, w) {
  return 13.12 + 0.6215*t - 11.37*Math.pow(w,0.16) + 0.3965*t*Math.pow(w,0.16);
}

const windchill = document.getElementById("windchill");

// Condition
if (temp <= 10 && wind > 4.8) {
  windchill.textContent = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
  windchill.textContent = "N/A";
}