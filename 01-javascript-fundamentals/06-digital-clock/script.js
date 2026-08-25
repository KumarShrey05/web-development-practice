let display = document.querySelector(".display");
let clockInterval;
let timerInterval;
let stopwatchInterval;
let setTime=0;
let sec = 0;

// ------------------CLOCK-------------------------

function time() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  display.innerHTML =
    `${String(h).padStart(2, "0")}:` +
    `${String(m).padStart(2, "0")}:` +
    `${String(s).padStart(2, "0")}`;
}

function startClock() {
  clearInterval(timerInterval);
  clearInterval(clockInterval);
  clearInterval(stopwatchInterval);
  time();
  clockInterval = setInterval(() => {
    time();
  }, 1000);
}

// --------------------TIMER-----------------------

// This function only contains the main logic of the feature (what it should do).
// It does not control when or how often it runs.
function timer() {
    if (setTime < 0) {
        clearInterval(timerInterval);
        display.innerHTML = 0;
        return;
    }
    display.innerHTML = setTime;
    setTime--;

}

// This function controls when the feature starts, stops other running intervals.
// Runs the main function repeatedly using setInterval.
function startTimer() {
  clearInterval(clockInterval);
  clearInterval(timerInterval);
  clearInterval(stopwatchInterval);
  setTime = Number(prompt("Enter the time in seconds."));
  timer();
  timerInterval = setInterval(() => {
    timer();
  }, 1000);
}

// ------------------STOPWATCH---------------------------

function stopwatch() {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  display.innerHTML =
    `${String(h).padStart(2, "0")}:` +
    `${String(m).padStart(2, "0")}:` +
    `${String(s).padStart(2, "0")}`;
  sec++;
}
function startStopwatch() {
  clearInterval(clockInterval);
  clearInterval(timerInterval);
  clearInterval(stopwatchInterval);
  sec = 0;
  stopwatchInterval = setInterval(() => {
    stopwatch();
  }, 1000);
}
