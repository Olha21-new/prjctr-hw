"use stict";

const button = document.getElementById("button");
const pageBody = document.getElementById("body");
const message = document.querySelector(".text");

const isButtonActive = localStorage.getItem("isButtonActive") === "true";

button.addEventListener("click", function () {
  const isButtonActive = button.classList.contains("active");
  const currentDate = new Date();

  if (isButtonActive) {
    button.classList.remove("active");
    pageBody.classList.remove("dark-mode");
    button.textContent = "Turn On";
    message.textContent = `Last turn off:${formatDate(currentDate)}`;
    console.log("Removed active class");
  } else {
    button.classList.add("active");
    pageBody.classList.add("dark-mode");
    button.textContent = "Turn Off";
    message.textContent = `Last turn on:${formatDate(currentDate)}`;
    console.log("Added active class");
  }
});

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
