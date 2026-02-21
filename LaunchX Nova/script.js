// LaunchX-Template/script.js

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Countdown to April 2026
function updateCountdown() {
    const launch = new Date('2026-04-01T00:00:00').getTime();
    const now = Date.now();
    const diff = launch - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
}

setInterval(updateCountdown, 60000);
updateCountdown();

// Waitlist form feedback (UI only)
function handleWaitlistSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const original = btn.textContent;

    btn.textContent = "You're in! 🚀";
    btn.style.background = '#10B981';

    setTimeout(() => {
        alert("Thank you! You're now on the LaunchX Nova waitlist.");
        btn.textContent = original;
        btn.style.background = '';
        e.target.reset();
    }, 1800);
}

document.getElementById('waitlist-form')?.addEventListener('submit', handleWaitlistSubmit);
document.getElementById('cta-form')?.addEventListener('submit', handleWaitlistSubmit);