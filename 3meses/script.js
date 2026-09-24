// --- RELOJ ROMÁNTICO (Cambia la fecha por el día en que se conocieron) ---
const startDate = new Date("2024-01-01T00:00:00"); 

function updateClock() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}
setInterval(updateClock, 1000);
updateClock();

// --- ÁRBOL DE CORAZONES (Canvas) ---
const canvas = document.getElementById("heartTree");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

function drawHeart(x, y, size, color) {
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size, size);
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -3, -5, -15, -25, -15);
    ctx.bezierCurveTo(-55, -15, -55, 20, -55, 20);
    ctx.bezierCurveTo(-55, 40, -35, 60, 0, 90);
    ctx.bezierCurveTo(35, 60, 55, 40, 55, 20);
    ctx.bezierCurveTo(55, 20, 55, -15, 25, -15);
    ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

// Dibujar tronco y estructura simple del árbol de ejemplo
function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Tronco
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(185, 280, 30, 100);

    // Hojas de corazones
    const hearts = [
        {x: 200, y: 220, size: 0.5, color: '#ff4d6d'},
        {x: 160, y: 180, size: 0.4, color: '#ff758f'},
        {x: 240, y: 190, size: 0.45, color: '#ff758f'},
        {x: 200, y: 140, size: 0.55, color: '#c9184a'},
        {x: 130, y: 150, size: 0.35, color: '#ffb3c1'},
        {x: 270, y: 160, size: 0.38, color: '#ff4d6d'},
        {x: 180, y: 90, size: 0.4, color: '#ff758f'},
        {x: 220, y: 100, size: 0.42, color: '#c9184a'}
    ];

    hearts.forEach(h => drawHeart(h.x, h.y, h.size, h.color));
}
drawTree();