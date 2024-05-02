let count = 0;
let intervalId;
let isTimerStarting = false;

let counterElement = document.getElementById("counter");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resumeButton = document.getElementById("resume");
let stopButton = document.getElementById("stop");

function startCounter() {
  if (!isTimerStarting) {
    intervalId = setInterval(incrementCounter, 1000);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    stopButton.disabled = false;
  }
}
function pauseCounter() {
  if (!isTimerStarting) {
    clearInterval(intervalId);
    isTimerStart = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resumeButton.disabled = false;
    stopButton.disabled = false;
  }
}
function resumeCounter() {
  if (!isTimerStarting) {
    intervalId = setInterval(incrementCounter, 1000);
    isTimerStart = true;
    startButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    stopButton.disabled = false;
  }
}

function stopCounter() {
  clearInterval(intervalId);
  count = 0;
  counterElement.textContent = count;
  startButton.disabled = false;
  pauseButton.disabled = true;
  resumeButton.disabled = true;
  stopButton.disabled = true;
}

function incrementCounter() {
  count++;
  counterElement.textContent = count;
}