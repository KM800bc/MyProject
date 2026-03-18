document.addEventListener("DOMContentLoaded", function(){

  const track = document.querySelector(".track");
  const cards = document.querySelectorAll(".card");

  const prev = document.querySelector(".left");
  const next = document.querySelector(".right");

  const popup = document.getElementById("popup");
  const contents = document.querySelectorAll(".popup-content");
  const closeBtn = document.getElementById("close");

  // 👉 요소 없으면 실행 중단 (에러 방지)
  if (!track || !cards.length || !prev || !next) {
    console.error("요소 선택 실패");
    return;
  }

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
    card.addEvent