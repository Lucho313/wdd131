let count = localStorage.getItem("reviews");

if (count === null) {
  count = 0;
}

count++;

localStorage.setItem("reviews", count);

document.getElementById("counter").textContent = count;