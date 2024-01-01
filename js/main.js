var bgMusic = new Audio("../audio/bgm.mp3");
bgMusic.volume = 0.2;
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
    bgMusic.currentTime = 77;
    bgMusic.play();
    setTimeout(function () {
      bgMusic.volume = 0.5;
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
