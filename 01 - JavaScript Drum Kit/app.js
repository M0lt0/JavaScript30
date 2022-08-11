window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});
const keys = document.querySelectorAll(".keys");
function trans(e) {
  if (e.propertyName !== "transform") {
    return;
  } else {
    e.target.classList.remove("playing");
    console.log(e);
  }
}

keys.forEach((key) => {
  key.addEventListener("transitionend", trans);
});
