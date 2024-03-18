"use strict";

const button = document.getElementById("button");
const pageBody = document.getElementById("body");
const message = document.querySelector(".text");

let storedTheme = localStorage.getItem("theme");
if (storedTheme === null || storedTheme === undefined) {
  storedTheme = "light";
}

const lastAction = localStorage.getItem("lastChange");

if (storedTheme === "dark") {
 turnOn(new Date(lastAction));
} else {
  turnOff(new Date(lastAction));
}

button.addEventListener("click", function () {
  const currentDate = new Date();
  if (button.classList.contains("active")) {
    turnOff(currentDate);
  } else {
    turnOn(currentDate);
  }
});

function turnOn(currentDate) {
  button.classList.add("active");
  pageBody.classList.add("dark-mode");
  button.textContent = "Turn Off";
  message.textContent = `Last turn on: ${formatDate(currentDate)}`;
  localStorage.setItem("theme", "dark");
  localStorage.setItem("lastChange", currentDate);
  console.log("Added active class");
}
function turnOff(currentDate) {
  button.classList.remove("active");
  pageBody.classList.remove("dark-mode");
  button.textContent = "Turn On";
  message.textContent = `Last turn off: ${formatDate(currentDate)}`;
  localStorage.setItem("theme", "light");
  localStorage.setItem("lastChange", currentDate);
  console.log("Removed active class");
}

function formatDate(date) {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleDateString("en-GB", options);
}
