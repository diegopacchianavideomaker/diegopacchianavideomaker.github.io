// Custom Cursor - Dot with Neon Red Trail
(function () {
    const dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    document.body.appendChild(dot);

    const trail = [];
    const TRAIL_LENGTH = 20;

    for (let i = 0; i < TRAIL_LENGTH; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cursor-trail');
        document.body.appendChild(particle);
        trail.push({
            el: particle,
            x: 0,
            y: 0,
        });
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // Move dot to mouse position
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';

        // Trail follows with delay
        let prevX = mouseX;
        let prevY = mouseY;

        trail.forEach((p, i) => {
            const speed = 0.35;
            p.x += (prevX - p.x) * speed;
            p.y += (prevY - p.y) * speed;

            p.el.style.left = p.x + 'px';
            p.el.style.top = p.y + 'px';

            // Fade and shrink along the trail
            const scale = 1 - (i / TRAIL_LENGTH);
            p.el.style.opacity = scale * 0.6;
            p.el.style.transform = `translate(-50%, -50%) scale(${scale * 0.8})`;

            prevX = p.x;
            prevY = p.y;
        });

        requestAnimationFrame(animate);
    }

    animate();
})();
