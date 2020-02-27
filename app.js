const timeDuration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");
const radious = circle.getAttribute("r");
const perimeter = 2 * Math.PI * radious;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;
const timer = new Timer(timeDuration, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("completed");
  }
});
