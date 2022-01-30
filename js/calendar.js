const calendar = document.querySelector("h2#calendar");

const date = new Date();
const today = date.toDateString();
calendar.innerText = today;