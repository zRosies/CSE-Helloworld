function displayHello() {
  const newElement = document.createElement("h1");
  newElement.innerHTML = "Hello World :)";
  document.body.appendChild(newElement);
}

displayHello();
