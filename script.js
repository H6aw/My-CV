const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

// Sesuaikan ukuran canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array untuk bintang
const stars = [];
const numStars = 200;

// Membuat bintang
class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.5;
    this.dx = Math.random() * 0.5 - 0.25;
    this.dy = Math.random() * 0.5 - 0.25;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // Reset posisi bintang jika keluar dari layar
    if (this.x < 0 || this.x > canvas.width) {
      this.x = Math.random() * canvas.width;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.y = Math.random() * canvas.height;
    }
  }
}

// Membuat banyak bintang
for (let i = 0; i < numStars; i++) {
  stars.push(new Star());
}

// Animasi bintang
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

// Jalankan animasi
animate();

// Perbarui ukuran canvas saat layar diubah ukurannya
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
