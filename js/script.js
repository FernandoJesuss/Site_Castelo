document.getElementById("infoButton").onclick = function() {
    var infoText = document.getElementById("infoText");
    infoText.style.display = infoText.style.display === "none" ? "block" : "none";
};

document.getElementById("audioButton").onclick = function() {
    var video = document.getElementById("backgroundVideo");
    video.muted = !video.muted;
    this.textContent = video.muted ?  "🔇 Desativar Áudio" : "🔊 Ativar Áudio";
};