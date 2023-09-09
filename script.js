document.addEventListener("DOMContentLoaded", function () {
    // Slack Name
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = "Anthony Samson";
});

const day = document.getElementById("day");
const time = document.getElementById("time");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function displayTime() {
  let refresh = 1000;
  let mytime = setTimeout("displayCurrentTime()", refresh);
}

function displayCurrentTime() {
  const today = new Date();
  let currentDay = days[today.getDay()];
  day.innerHTML = currentDay;

  const theTime = new Date();
  const seconds = theTime.getUTCMilliseconds();
  const minutes = theTime.getUTCMinutes();
  const hour = theTime.getUTCHours();

  const currentTime = `${hour}:${minutes}:${seconds}`;
  time.innerHTML = currentTime;
  displayTime();
}
