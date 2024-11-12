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