const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spots = [];
let hue = 0;

const mouse = {
    x: undefined,
    y: undefined
};

// Corrigido: 'event.X' e 'event.Y' para 'event.clientX' e 'event.clientY'
canvas.addEventListener("mousemove", function (event) {
    mouse.x = event.clientX; // Correção aqui
    mouse.y = event.clientY; // Correção aqui
    for (let i = 0; i < 3; i++) {
        spots.push(new Particle());
    }
});

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 2 + 0.1;
        // Corrigido: 'this.speedx.Math.random()' para 'this.speedx = Math.random()'
        this.speedx = Math.random() * 2 - 1; // Correção aqui
        this.speedy = Math.random() * 2 - 1;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }

    update() {
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.size > 0.1) this.size -= 0.03;
    }

    draw() { // Corrigido: adicionado o método draw corretamente
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Corrigido: adicionado ',' entre 'this.size' e '0'
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticle() { // Corrigido: 'handLeParticle' para 'handleParticle'
    for (let i = 0; i < spots.length; i++) {
        spots[i].update();
        spots[i].draw();
        
        for (let j = i + 1; j < spots.length; j++) { // Corrigido: começando j em i + 1
            const dx = spots[i].x - spots[j].x; // Corrigido: 'sports' para 'spots'
            const dy = spots[i].y - spots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy); // Corrigido: 'dy*' para 'dy * dy'
            
            if (distance < 90) {
                ctx.beginPath();
                ctx.strokeStyle = spots[i].color; // Corrigido: 'sports[i]' para 'spots[i]'
                ctx.lineWidth = spots[i].size / 10;
                ctx.moveTo(spots[i].x, spots[i].y);
                ctx.lineTo(spots[j].x, spots[j].y); // Corrigido: linha de destino
                ctx.stroke(); // Corrigido: 'ctx.troke()' para 'ctx.stroke()'
            }
        }

        if (spots[i].size <= 0.3) {
            spots.splice(i, 1);
            i--; // Mantém o índice correto após remoção
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticle(); // Corrigido: chamada da função correta
    hue++;
    requestAnimationFrame(animate);
}

// Corrigido: a função anônima foi corrigida para ter um corpo válido
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth; // Correção aqui
    canvas.height = window.innerHeight; // Correção aqui
});

window.addEventListener("mouseout", function () {
    mouse.x = undefined;
    mouse.y = undefined;
});

animate();