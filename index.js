// Accessing the input field
let inputField = document.querySelector("input");
console.log(inputField);

// Accessing items class that has list
var items = document.getElementById("lsitems");
console.log(items);

// Accessing ul
var myul = document.getElementById("ul-sec");

// Accessing the button
let btnAdd = document.querySelector("button");

btnAdd.addEventListener("click", function () {
  console.log(inputField.value);
  inputValue = inputField.value;
  inputField.value = "";

  //   showing the items that has list
  items.style.display = "block";

  // creating li
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(inputValue));
  myul.appendChild(li);
});

// Accesing clearn button
let btnClear = document.getElementById("clearbtn");

btnClear.addEventListener("click", function () {
  while (myul.firstChild) {
    myul.removeChild(myul.firstChild);
  }
});
