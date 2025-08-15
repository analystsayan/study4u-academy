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
