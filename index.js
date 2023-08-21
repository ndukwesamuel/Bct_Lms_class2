document.write("Hello World");

// getElementById:
// getElementsByClassName
// getElementsByTagName
const result = document.getElementById("web");
console.log(result);
// const result_tag = document.getElementsByTagName("p");
// console.log(result_tag);
const result_class = document.getElementsByClassName("para");
console.log(result_class);

// get Element by id

const button = document.getElementById("myButton");

const divElement = document.getElementById("myDiv");

button.addEventListener("click", () => {
  console.log("Button Clicked");
  divElement.textContent = "Update  Content";
  divElement.style.color = "red";
});
