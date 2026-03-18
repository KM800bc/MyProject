gsap.registerPlugin(Draggable);

const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card");

const prev = document.querySelector(".left");
const next = document.querySelector(".right");

const popup = document.getElementById("popup");
const contents = document.querySelectorAll(".popup-content");
const closeBtn = document.getElementById("close");

const cardWidth = 240;
const maxX = -(cardWidth * (cards.length - 3));

let currentX = 0;

/* 🔥 GSAP 드래그 */
Draggable.create(track, {
  type: "x",
  inertia: true,
  bounds: { minX: maxX, maxX: 0 },
  snap: {
    x: (value) => Math.round(value / cardWidth) * cardWidth
  }
});

/* 👉 버튼 이동 */
next.addEventListener("click", () => {
  currentX -= cardWidth * 2;
  if (currentX < maxX) currentX = maxX;

  gsap.to(track, {
    x: currentX,
    duration: 0.6,
    ease: "power3.out"
  });
});

prev.addEventListener("click", () => {
  currentX += cardWidth * 2;
  if (currentX > 0) currentX = 0;

  gsap.to(track, {
    x: currentX,
    duration: 0.6,
    ease: "power3.out"
  });
});

/* 🔥 카드 클릭 → 팝업 */
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