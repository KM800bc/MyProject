document.addEventListener("DOMContentLoaded", function(){

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

  // GSAP 초기 위치
  gsap.set(track, { x: 0 });

  /* 슬라이드 - GSAP 애니메이션 */
  next.addEventListener("click", function(){
    if(current < max){
      current++;
      gsap.to(track, {duration:0.5, x: -current * cardWidth, ease:"power2.out"});
    }
  });

  prev.addEventListener("click", function(){
    if(current > 0){
      current--;
      gsap.to(track, {duration:0.5, x: -current * cardWidth, ease:"power2.out"});
    }
  });

  /* 카드 클릭 → 팝업 */
  cards.forEach(function(card){
    card.addEventListener("click", function(){
      const index = this.getAttribute("data-index");

      contents.forEach(function(c){
        c.classList.remove("active");
      });

      document.querySelector('.popup-content[data-index="'+index+'"]')
        .classList.add("active");

      popup.style.display = "flex";
    });
  });

  /* 팝업 닫기 */
  closeBtn.addEventListener("click", function(){
    popup.style.display = "none";
  });
});