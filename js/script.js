const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card");

const prev = document.querySelector(".left");
const next = document.querySelector(".right");

const popup = document.getElementById("popup");
const contents = document.querySelectorAll(".popup-content");
const closeBtn = document.getElementById("close");

let current = 0;

const cardWidth = 220;
const visible = 6;
const max = cards.length - visible;

/* 슬라이드 */
next.addEventListener("click", () => {
  if (current < max) {
    current++;
    track.style.transform = `translateX(-${current * cardWidth}px)`;
  }
});

prev.addEventListener("click", () => {
  if (current > 0) {
    current--;
    track.style.transform = `translateX(-${current * cardWidth}px)`;
  }
});

/* 팝업 */
cards.forEach(card => {
  card.addEventListener("click", () => {
    const index = card.dataset.index;

    contents.forEach(c => c.classList.remove("active"));
    document.querySelector(`.popup-content[data-index="${index}"]`)
      .classList.add("active");

    popup.style.display = "flex";
  });
});

/* 닫기 */
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});