const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const boxes = document.getElementsByClassName("box");
  console.log(boxes);
  console.log("Button Clicked");

  for (let index = 0; index < boxes.length; index++) {
    boxes[index].style.backgroundColor = "red";
  }
});

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementsByClassName("taskList")[0];

console.log({ addButton, taskInput, taskList });

addButton.addEventListener("click", () => {
  const newTask = taskInput.value.trim();

  if (newTask !== "") {
    const li = document.createElement("li");
    li.textContent = newTask;
    taskList.appendChild(li);
    taskInput.value = "";
  }

  console.log(newTask);
});
