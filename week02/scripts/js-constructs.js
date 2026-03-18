const fruits = ["Apple", "Banana", "Orange", "Mango"];

const list = document.querySelector("#myList");

fruits.forEach(function(fruit) {

    const li = document.createElement("li");
    li.textContent = fruit;

    list.appendChild(li);

});