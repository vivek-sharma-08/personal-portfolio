// =============================
// Typing Effect
// =============================

const typingText = "Software Developer | AI Enthusiast";
let typingIndex = 0;

function typingEffect() {
    const heading = document.querySelector(".hero h2");

    if (typingIndex < typingText.length) {
        heading.innerHTML += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typingEffect, 80);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".hero h2");
    heading.innerHTML = "";
    typingEffect();
});


// =============================
// Scroll Reveal Animation
// =============================

const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// =============================
// Mobile Menu
// =============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =============================
// Scroll To Top Button
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =============================
// Footer Year Update
// =============================

const copyrightEl = document.querySelector("footer .copyright");

copyrightEl.innerHTML =
    `© ${new Date().getFullYear()} Vivek Sharma. All Rights Reserved.`;
