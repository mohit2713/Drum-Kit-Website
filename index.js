const drums = document.getElementsByClassName("drum");

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const sound = getSound(key);
  playSound(sound, key);
});

function getSound(key) {
  switch (key) {
    case "w":
      return "./sounds/crash.mp3";

    case "a":
      return "./sounds/kick-bass.mp3";

    case "s":
      return "./sounds/snare.mp3";

    case "d":
      return "./sounds/tom-1.mp3";

    case "j":
      return "./sounds/tom-2.mp3";

    case "k":
      return "./sounds/tom-3.mp3";

    case "l":
      return "./sounds/tom-4.mp3";

    default:
      console.log(button);
  }
}

function playSound(sound, key) {
  const audio = new Audio(sound);
  audio.play();
  keyButtonAnimation(key);
}

function addingEvent(x) {
  x.addEventListener("click", function () {
    const button = this.innerHTML;
    const sound = getSound(button);
    playSound(sound, button);
  });
}
for (let i = 0; i < drums.length; i++) {
  addingEvent(drums[i]);
}

function keyButtonAnimation(key) {
  const activeButton = document.querySelector("." + key);
  // console.log(activeButton);

  if (activeButton.classList.contains("pressed")) {
    return;
  } else activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 200);
}
