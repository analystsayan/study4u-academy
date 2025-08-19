const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

function openSidebar() {
    sidebar.classList.add('active');
    hamburger.classList.add('hidden');
    closeSidebar.classList.add('visible');
}

function closeSidebarMenu() {
    sidebar.classList.remove('active');
    hamburger.classList.remove('hidden');
    closeSidebar.classList.remove('visible');
}

hamburger.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarMenu);





// batch card
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".latest-batch-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach(c => c.classList.remove("active"));
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: .6 // 60% visible means it's in the center
    });

    cards.forEach(card => observer.observe(card));
});



// ----- Instructors carousel -----
const track = document.getElementById('carousel'); // parent of the .card nodes

function updateCards() {
    const cards = track.querySelectorAll('.card'); // re-query after DOM reorders
    const total = cards.length;
    const mid = Math.floor(total / 2);

    cards.forEach((card, i) => {
        const offset = i - mid;
        const dx = offset * 230; // horizontal spacing
        const rot = offset * -30; // 3D tilt
        const scale = 1 - Math.abs(offset) * 0.2;

        // Lower side cards
        const dy = Math.abs(offset) * 50; // 20px lower for each step from center

        card.style.transform = `
            translate(-50%, -50%) 
            translateX(${dx}px) 
            translateY(${dy}px) 
            scale(${scale}) 
            rotateY(${rot}deg)
        `;
        card.style.opacity = 1 - Math.abs(offset) * 0.5;
        card.style.zIndex = total - Math.abs(offset); // ensure center is on top
    });
}

function rotateLeft() { // next
    track.appendChild(track.firstElementChild);
    updateCards();
}
function rotateRight() { // prev
    track.prepend(track.lastElementChild);
    updateCards();
}

updateCards();

// Wheel (desktop)
track.addEventListener('wheel', (e) => {
    e.preventDefault();
    (e.deltaY > 0 || e.deltaX > 0) ? rotateLeft() : rotateRight();
}, { passive: false });

// Touch swipe (mobile)
let startX = 0, deltaX = 0;
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

track.addEventListener('touchmove', (e) => {
    deltaX = e.touches[0].clientX - startX;
    e.preventDefault(); // prevent page scroll
}, { passive: false });

track.addEventListener('touchend', () => {
    if (Math.abs(deltaX) > 40) (deltaX < 0 ? rotateLeft() : rotateRight());
    deltaX = 0;
});


// panda

(function () {
    const panda = document.getElementById('indianFlag');
    panda.style.cursor = 'pointer';
    // panda.style.touchAction = 'none';

    const HEARTS_PER_CLICK = 15;
    const SPEED_MIN = 700;
    const SPEED_MAX = 4900;
    const DISTANCE_MIN = 110;
    const DISTANCE_MAX = 220;
    const COLORS = ['#ff6f00ff', '#1b8700ff', '#3c00ffff', '#ffffffff'];

    function random(min, max) { return Math.random() * (max - min) + min; }
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    function spawnHearts(x, y) {
        for (let i = 0; i < HEARTS_PER_CLICK; i++) {
            const heart = document.createElement('div');
            heart.className = 'panda-heart';
            heart.style.position = 'fixed';
            heart.style.left = x + 'px';
            heart.style.top = y + 'px';
            heart.style.color = pick(COLORS);
            heart.style.fontSize = `${random(12, 28)}px`;
            heart.innerText = '❤';

            const tx = (Math.random() - 0.5) * 160;
            const rot = Math.floor(random(-60, 60)) + 'deg';
            const dist = random(DISTANCE_MIN, DISTANCE_MAX);
            const duration = Math.floor(random(SPEED_MIN, SPEED_MAX));

            heart.style.transform = `translate(-50%,-50%) scale(${random(0.8, 1.2)})`;
            heart.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
            document.body.appendChild(heart);

            requestAnimationFrame(() => {
                heart.style.transform = `translate(-50%,-50%) translateY(${-dist}px) translateX(${tx}px) scale(${random(0.6, 0.95)}) rotate(${rot})`;
                heart.style.opacity = 0;
            });

            setTimeout(() => heart.remove(), duration + 0);
        }
    }

    function handleInteraction(e) {
        let x, y;
        if (e.pointerType === 'touch') {
            x = e.clientX;
            y = e.clientY;
        } else {
            x = e.clientX;
            y = e.clientY;
        }
        spawnHearts(x, y);
    }

    // Use pointerdown for instant response on both mouse & touch
    panda.addEventListener('pointerdown', handleInteraction);

})();


// theme
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkBtns = document.querySelectorAll(".dark-btn");
    const lightBtns = document.querySelectorAll(".light-btn");

    function setTheme(mode) {
        if (mode === "light") {
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        }
    }

    function vibrate() {
        if (navigator.vibrate) {
            navigator.vibrate(50); // vibrates for 50ms
        }
    }

    // Click handlers (for ALL containers: desktop + mobile)
    darkBtns.forEach(btn =>
        btn.addEventListener("click", () => {
            setTheme("dark");
            vibrate();
        })
    );

    lightBtns.forEach(btn =>
        btn.addEventListener("click", () => {
            setTheme("light");
            vibrate();
        })
    );

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
});



