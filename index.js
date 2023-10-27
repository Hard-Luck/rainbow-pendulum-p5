document.addEventListener("DOMContentLoaded", (event) => {
  const buttonsContainer = document.getElementById("buttons");
  const onbutton = document.createElement("button");
  onbutton.addEventListener("click", userStartAudio);
  onbutton.textContent = "Audio On";

  const offbutton = document.createElement("button");
  offbutton.addEventListener("click", getAudioContext().suspend);
  offbutton.textContent = "Audio off";

  buttonsContainer.appendChild(onbutton);
  buttonsContainer.appendChild(offbutton);
});
