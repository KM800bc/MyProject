document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".card");
  const popup = document.getElementById("popup");
  const slides = document.querySelectorAll(".slide");

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const close = document.getElementById("close");

  let current = 0;

  function showSlide(index){
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  // 카드 클릭
  cards.forEach(card => {
    card.addEventListener("click", function(){
      current = parseInt(card.dataset.index);
      popup.style.display = "flex";
      showSlide(current);
    });
  });

  // 닫기
  close.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // 이전
  prev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  // 다음
  next.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

});