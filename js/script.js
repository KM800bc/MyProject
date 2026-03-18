// DOM이 모두 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // GSAP ScrollTrigger 등록
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");
  const popup = document.getElementById("popup");
  const features = document.querySelectorAll(".feature");

  if (!openBtn || !closeBtn || !popup) {
    console.error("팝업 관련 요소를 찾을 수 없습니다. HTML 구조 확인 필요.");
    return;
  }

  // -------------------------
  // 팝업 열기
  // -------------------------
  openBtn.addEventListener("click", () => {
    // 팝업 보이기
    popup.style.display = "flex";
    document.body.style.overflow = "hidden"; // 배경 스크롤 막기

    // GSAP 모달 scale/fade 애니메이션
    gsap.from(".popup-content", {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    });

    // 내부 feature 순차 애니메이션 + ScrollTrigger 적용
    features.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });
  });

  // -------------------------
  // 팝업 닫기 (닫기 버튼)
  // -------------------------
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // -------------------------
  // 배경 클릭 시 닫기
  // -------------------------
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // -------------------------
  // ESC 키로 닫기
  // -------------------------
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});