//Ativar ou Desativar o áudio

document.getElementById("audioButton").onclick = function() {
    var video = document.getElementById("backgroundVideo");
    video.muted = !video.muted;

    var texto = this.querySelector(".texto");
    texto.classList.toggle("hidden"); // Alterna a visibilidade do texto

    // Altera o ícone conforme o estado do áudio
    var icon = this.querySelector(".icon");
    icon.textContent = video.muted ? "🔇" : "🔊"; // Atualiza o ícone
};

//Menu Hambuger

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active'); // Adiciona/remover a classe active
});


// Uncheck radio buttons (unfortunatley this cannot be done with css alone)

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("click", (e) => {
      e.preventDefault();
      // setting a timeout enables this hack to work
      setTimeout(() => (radio.checked = !radio.checked), 0);
    });
  });
  






//Carrosel Videos

let currentIndex = 0;

function changeVideo(direction) {
    const videos = document.querySelectorAll('.video');
    videos[currentIndex].classList.remove('active');

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = videos.length - 1; // Volta para o último vídeo
    } else if (currentIndex >= videos.length) {
        currentIndex = 0; // Volta para o primeiro vídeo
    }

    videos[currentIndex].classList.add('active');
    updateVideoPosition();
}

function updateVideoPosition() {
    const videos = document.querySelector('.videos');
    const offset = -currentIndex * 100; // Move o carrossel
    videos.style.transform = `translateX(${offset}%)`;
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');
    videos.forEach((video, index) => {
        if (index !== currentIndex) {
            video.classList.remove('active');
        }
    });
});






  

/*
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-hidden');
});*/







