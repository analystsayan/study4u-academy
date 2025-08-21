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