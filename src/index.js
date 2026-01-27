import "./styles.css";
import Task from "./Task.js";

let taskList = [];

const textArea = document.querySelector("textarea");
function createTask() {
  console.log(textArea.value);
  taskList.push(new Task(textArea.value, new Date()));
  save();
  createTaskDOM();
}

function createTaskDOM() {
  const wrapper = document.querySelector("#wrapper");
  wrapper.replaceChildren();
  taskList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.textContent = task.text;
    taskText.addEventListener("click", ()=>{
      task.swap();
      taskText.textContent = task.text;
      console.log(task)
  });
    taskElement.append(taskText);
    const taskDelete = document.createElement("div");
    taskDelete.classList.add("task-delete");
    taskDelete.textContent = "X";
    taskDelete.addEventListener("click", () => {
      deleteTask(task.id);
    });
    taskElement.append(taskDelete);
    wrapper.append(taskElement);
  });
}

function deleteTask(taskID) {
  if (confirm("Are you sure you would like to delete this note?")) {
    taskList = taskList.filter((task) => task.id !== taskID);
    save();
    createTaskDOM();
  }
}

function save() {
  console.log(taskList);
  localStorage.setItem("simple-todo-list", JSON.stringify(taskList));
}

function load() {
  taskList = [];
  if (localStorage.getItem("simple-todo-list") !== null) {
    const tasks = JSON.parse(localStorage.getItem("simple-todo-list"));
    tasks.forEach((task) => {
      taskList.push(new Task(task.text, task.date, task.id));
    });
  }
  createTaskDOM();
}

function initialize() {
  document.querySelector("#add-btn").addEventListener("click", () => {
    createTask();
    document.querySelector("textarea").value = "";
  });
  load();
}

initialize();
