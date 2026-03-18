gsap.registerPlugin(ScrollTrigger);

const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

// 메뉴 열기 애니메이션
navToggle.addEventListener("click", () => {
  // 상태 토글
  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    gsap.fromTo(
      navList,
      { autoAlpha: 0, y: -20 },
      { duration: 0.5, autoAlpha: 1, y: 0, ease: "power2.out" }
    );

    gsap.fromTo(
      ".nav-list li",
      { x: -20, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.1,
      }
    );

  } else {
    gsap.to(navList, { duration: 0.3, autoAlpha: 0, y: -10 });
  }
});









document.addEventListener("DOMContentLoaded", function(){

  const track = document.querySelector(".track");
  const cards = document.querySelectorAll(".card");
  const prev = document.querySelector(".left");
  const next = document.querySelector(".right");
  const popup = document.getElementById("popup");
  const contents = document.querySelectorAll(".popup-content");
  const closeBtn = document.getElementById("close");

  let current = 0;
  const cardWidth = 220; // 카드 + gap
  const visible = 6;
  const max = cards.length - visible;

  gsap.set(track, { x: 0 });

  // 슬라이드 오른쪽
  next.addEventListener("click", () => {
    if(current < max){
      current++;
      gsap.to(track, {duration:0.5, x: -current * cardWidth, ease:"power2.out"});
    }
  });

  // 슬라이드 왼쪽
  prev.addEventListener("click", () => {
    if(current > 0){
      current--;
      gsap.to(track, {duration:0.5, x: -current * cardWidth, ease:"power2.out"});
    }
  });

  // 카드 클릭 → 팝업
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const index = card.dataset.index;
      contents.forEach(c => c.classList.remove("active"));
      document.querySelector(`.popup-content[data-index="${index}"]`).classList.add("active");
      popup.style.display = "flex";
    });
  });

  // 팝업 닫기
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

});