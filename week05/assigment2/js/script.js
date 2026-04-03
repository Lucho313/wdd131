const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Phone" },
  { id: "p3", name: "Headphones" }
];

const select = document.getElementById("product");

// llenar select dinámicamente
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

// footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;