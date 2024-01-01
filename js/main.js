var svgYuanShen = document.getElementById("svgYuanShen");

function genshenAppearOrHide(switchAppearOrHide) {
  if (switchAppearOrHide == false) {
    svgYuanShen.style.cssText =
      "transition: opacity 0s ease-in-out; opacity: 0;";
  } else if (switchAppearOrHide == true) {
    setTimeout(function () {
      svgYuanShen.style.cssText =
        "transition: opacity 2s ease-in-out; opacity: 1;";
    }, 2200);
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
