const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});



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
