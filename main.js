const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // create span element so we can delete the li
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //multiplication sign
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

//add eventListner for marking things as checked
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//save data in localStorage
const saveData = () => {
  localStorage.setItem("task", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("task");
};
showTask();
