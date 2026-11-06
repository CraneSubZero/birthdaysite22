const magicLayer = document.querySelector(".floating-magic");
const wishPanel = document.querySelector(".wish-panel");
const wishButton = document.querySelector("#wish-button");
const wishMessage = document.querySelector("#wish-message");
const photoDialog = document.querySelector("#photo-dialog");
const dialogImage = document.querySelector(".dialog-image");
const dialogCaption = document.querySelector(".dialog-caption");
const dialogClose = document.querySelector(".dialog-close");

for (let index = 0; index < 18; index += 1) {
  const spark = document.createElement("span");
  spark.className = "spark";
  spark.textContent = index % 3 === 0 ? "✦" : "·";
  spark.style.left = `${Math.random() * 100}%`;
  spark.style.setProperty("--spark-size", `${7 + Math.random() * 11}px`);
  spark.style.setProperty("--spark-duration", `${11 + Math.random() * 12}s`);
  spark.style.setProperty("--spark-delay", `${Math.random() * 14}s`);
  spark.style.setProperty("--spark-drift", `${Math.random() * 80 - 40}px`);
  magicLayer.append(spark);
}

wishButton.addEventListener("click", () => {
  wishMessage.textContent = "Your wish is on its way to the stars. ✨";

  for (let index = 0; index < 24; index += 1) {
    const sparkle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 24;
    const distance = 55 + Math.random() * 115;
    sparkle.className = "wish-burst";
    sparkle.textContent = index % 2 === 0 ? "✦" : "✧";
    sparkle.style.left = "50%";
    sparkle.style.top = "62%";
    sparkle.style.setProperty("--burst-x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--burst-y", `${Math.sin(angle) * distance}px`);
    wishPanel.append(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
  }
});

document.querySelectorAll(".polaroid").forEach((polaroid) => {
  polaroid.addEventListener("click", () => {
    const image = polaroid.querySelector("img");
    const caption = polaroid.querySelector(".photo-caption");
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = caption.textContent;
    photoDialog.showModal();
  });
});

dialogClose.addEventListener("click", () => photoDialog.close());

photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) {
    photoDialog.close();
  }
});
