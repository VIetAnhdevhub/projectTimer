class Timer {
  constructor(timeDuration, startButton, pauseButton, callbacks) {
    this.timeDuration = timeDuration;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    this.tick();
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.interval = setInterval(this.tick, 50);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };
  get timeRemaining() {
    return parseFloat(this.timeDuration.value);
  }
  set timeRemaining(time) {
    this.timeDuration.value = time.toFixed(2);
  }
}
