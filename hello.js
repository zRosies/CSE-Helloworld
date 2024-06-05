const newElement = document.createElement("h1");
newElement.id = "first";
document.body.appendChild(newElement);
const h1 = document.querySelector("#first");
h1.innerHTML = " Hello World :)";
