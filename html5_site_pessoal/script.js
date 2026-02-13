// Seleciona todos os elementos com .fade-up
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Para animar só uma vez, pode descomentar a linha abaixo
      // observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // 10% do elemento precisa estar visível
});

// Observa cada elemento
fadeElements.forEach(el => observer.observe(el));
// ===== Loop de palavras =====
const words = ["Estudo →", "Erro →", "Ajusto →", "Aprendo →", "Repito ←"];
const loopText = document.getElementById("loop-text");

let wordIndex = 0;

function changeWord() {
  loopText.style.opacity = 0;
  loopText.style.transform = "translateY(10px)";

  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    loopText.textContent = words[wordIndex];
    loopText.style.opacity = 1;
    loopText.style.transform = "translateY(50px)";
  }, 400);
}

setInterval(changeWord, 2500);
