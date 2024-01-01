var bgMusic = new Audio("../audio/bg-music.mp3");
bgMusic.volume = 0.1;
bgMusic.currentTime = 77;
bgMusic.loop = true;
var svgYuanShen = document.getElementById("svgYuanShen");

function genshenAppearOrHide(switchAppearOrHide) {
  if (switchAppearOrHide == false) {
    svgYuanShen.style.cssText =
      "transition: opacity 0s ease-in-out; opacity: 0;";
    bgMusic.pause();
  } else if (switchAppearOrHide == true) {
    setTimeout(function () {
      svgYuanShen.style.cssText =
        "transition: opacity 2s ease-in-out; opacity: 1;";
    }, 2200);
    bgMusic.play();
    setTimeout(function () {
      bgMusic.volume = 0.3;
    }, 2000);
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    genshenAppearOrHide(false);
  } else {
    genshenAppearOrHide(true);
  }
});

document.addEventListener("keydown", function (event) {
  console.log(event.code);
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    genshenAppearOrHide(false);
    genshenAppearOrHide(true);
  } else if (event.code === "Escape") {
    genshenAppearOrHide(false);
  } else if (event.code === "Space") {
    genshenAppearOrHide(true);
  }
});
