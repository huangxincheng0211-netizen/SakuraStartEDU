function copyWechat() {
  const wechat = "SakuraStartEDU";
  const tip = document.getElementById("copyTip");

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(wechat).then(() => {
      tip.textContent = "微信号已复制：SakuraStartEDU";
    });
  } else {
    const input = document.createElement("input");
    input.value = wechat;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    tip.textContent = "微信号已复制：SakuraStartEDU";
  }
}

let currentSlide = 0;
const totalSlides = 2;

function updateCarousel() {
  const track = document.getElementById("carouselTrack");
  const dots = document.querySelectorAll(".carousel-dots button");
  if (!track) return;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

setInterval(() => {
  moveSlide(1);
}, 4500);

function showTab(name, btn) {
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(el => el.classList.remove("active"));

  if (btn) btn.classList.add("active");

  const target = document.getElementById(`panel-${name}`);
  if (target) target.classList.add("active");
}
