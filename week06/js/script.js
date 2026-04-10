const form = document.getElementById("formIMC");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("peso").value);
    const height = parseFloat(document.getElementById("altura").value);
    const result = document.getElementById("resultado");

    if (!weight || !height || height <= 0) {
      result.textContent = "Please enter valid values";
      result.style.color = "white";
      return;
    }

    const bmi = weight / (height * height);

    let message = "";

    if (bmi < 18.5) {
      message = "Underweight";
      result.style.color = "orange";
    } else if (bmi < 25) {
      message = "Normal weight";
      result.style.color = "lightgreen";
    } else if (bmi < 30) {
      message = "Overweight";
      result.style.color = "yellow";
    } else {
      message = "Obesity";
      result.style.color = "red";
    }

    result.textContent = `BMI: ${bmi.toFixed(2)} - ${message}`;

    const person = {
      weight: weight,
      height: height,
      bmi: bmi.toFixed(2),
      status: message
    };

    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(person);
    localStorage.setItem("history", JSON.stringify(history));
  });
}


const list = document.getElementById("lista");

if (list) {
  let history = JSON.parse(localStorage.getItem("history")) || [];

  history.forEach(item => {
    const li = document.createElement("li");

    li.textContent = `BMI: ${item.bmi} | ${item.status} | Weight: ${item.weight}kg | Height: ${item.height}m`;

    list.appendChild(li);
  });
}



function clearHistory() {
  localStorage.removeItem("history");
  location.reload();
}

// YEAR
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// LAST MODIFIED
const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = document.lastModified;
}