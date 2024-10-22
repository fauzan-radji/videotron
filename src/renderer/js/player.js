(() => {
  const player = document.getElementById("player");
  /**
   * @type {HTMLVideoElement}
   */
  const video = document.getElementById("video");
  const controls = document.getElementById("controls");
  const button = {
    play: document.getElementById("play"),
    fullscreen: document.getElementById("fullscreen"),
    seek: document.querySelectorAll(".seek"),
  };
  const text = {
    current: document.getElementById("current"),
    duration: document.getElementById("duration"),
  };
  /**
   * @type {HTMLProgressElement}
   */
  const progress = document.getElementById("progress");

  const cursor = {
    isDown: false,
    timeoutId: 0,
  };

  Object.freeze(button);
  Object.freeze(text);

  button.play.addEventListener("click", togglePlayVideo);
  video.addEventListener("click", togglePlayVideo);
  button.fullscreen.addEventListener("click", toggleFullscreen);
  progress.addEventListener("mousemove", (e) => {
    if (!cursor.isDown) return;
    seekEvent(e);
  });
  progress.addEventListener("click", seekEvent);
  progress.addEventListener("mousedown", () => (cursor.isDown = true));
  window.addEventListener("mouseup", () => (cursor.isDown = false));
  window.addEventListener("mousemove", () => {
    player.classList.remove("hide-cursor");
    controls.classList.remove("hidden");
    clearTimeout(cursor.timeoutId);
    cursor.timeoutId = setTimeout(() => {
      player.classList.add("hide-cursor");
      controls.classList.add("hidden");
    }, 1000);
  });
  button.seek.forEach((seekButton) => {
    seekButton.addEventListener("click", () =>
      seek(+seekButton.dataset.duration)
    );
  });

  video.addEventListener("canplay", () => {
    controls.classList.remove("disabled");
    text.current.textContent = secondToTimestring(video.currentTime);
    text.duration.textContent = secondToTimestring(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;
  });
  video.addEventListener("timeupdate", () => {
    text.current.textContent = secondToTimestring(video.currentTime);
    const value = (video.currentTime / video.duration) * 100;
    if (isNaN(value)) return;
    progress.value = value;
  });
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.pause();
    button.play.children[0].innerHTML = ICON.PLAY;
    text.current.textContent = secondToTimestring(video.currentTime);
    progress.value = 0;
  });

  const keyPressHandler = {
    KeyF: toggleFullscreen,
    Space: togglePlayVideo,
    ArrowLeft: (e) => {
      if (e.ctrlKey) {
        prev();
      } else {
        seek(+button.seek[0].dataset.duration);
      }
    },
    ArrowRight: (e) => {
      if (e.ctrlKey) {
        next();
      } else {
        seek(+button.seek[1].dataset.duration);
      }
    },
  };
  window.addEventListener("keydown", (e) => {
    if (controls.classList.contains("disabled")) return;
    const handler = keyPressHandler[e.code];
    if (!handler) {
      console.log(e.code);
      return;
    }
    e.preventDefault();
    handler(e);
  });

  function seekEvent(e) {
    const percent = e.offsetX / progress.clientWidth;
    progress.value = percent * 100;
    video.currentTime = video.duration * percent;
  }

  function togglePlayVideo() {
    if (!video.src) return;
    if (video.paused) {
      video.play();
      button.play.children[0].innerHTML = ICON.PAUSE;
    } else {
      video.pause();
      button.play.children[0].innerHTML = ICON.PLAY;
    }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      button.fullscreen.children[0].innerHTML = ICON.ENTER_FULLSCREEN;
    } else {
      player.requestFullscreen();
      button.fullscreen.children[0].innerHTML = ICON.EXIT_FULLSCREEN;
    }
  }

  function next() {
    const active = document.querySelector(".active");
    if (!active) return;
    const next = active.nextElementSibling;
    if (!next) return;
    next.querySelector("a").click();
  }

  function prev() {
    const active = document.querySelector(".active");
    if (!active) return;
    const prev = active.previousElementSibling;
    if (!prev) return;
    prev.querySelector("a").click();
  }

  function seek(second) {
    video.currentTime += second;
  }

  function secondToTimestring(time) {
    const MINUTE = 60;
    const HOUR = MINUTE * 60;
    const hour = addLeadingZero(Math.floor(time / HOUR));
    time %= HOUR;
    const minute = addLeadingZero(Math.floor(time / MINUTE));
    time %= MINUTE;
    const second = addLeadingZero(Math.floor(time));
    return `${hour}:${minute}:${second}`;
  }

  function addLeadingZero(n) {
    return `${n <= 9 ? "0" : ""}${n}`;
  }
})();
