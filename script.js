let updateTimerDisplay = (minutes, seconds) => {
  currentTime = document.querySelector("#time-left");
  console.log(currentTime);
  minutes += "";
  seconds += "";
  currentTime.textContent =
    minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
};

let timerId;

const startTimer = (duration) => {
  clearInterval(timerId);
  timerId = setInterval(() => {
    let minutes = Math.floor(duration / 60);
    let secs = duration % 60;
    updateTimerDisplay(minutes, secs);

    if (duration <= 0) {
      clearInterval(timerId);
    } else {
      duration--;
    }
  }, 1000);
};

const studyBtn = document.querySelector("#study-btn");
studyBtn.addEventListener("click", () => {
  startTimer(25 * 60);
});

const breakBtn = document.querySelector("#break-btn");
breakBtn.addEventListener("click", () => {
  startTimer(5 * 60);
});
