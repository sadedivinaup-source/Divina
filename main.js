/* ============================= DOM SELECTORS =============================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

/* ============================= MOBILE MENU TOGGLE =============================== */
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });
}

/* ============================= INSTANT MENU SCROLL =============================== */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Preventing the default anchor behavior for smooth scrolling
        e.preventDefault();

        // Close the menu on mobile after clicking a link
        if (menuIcon && navbar) {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }

        // Smooth scroll to the section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================= SCROLL ACTIVE LINK + STICKY HEADER =============================== */
window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(
                `header nav a[href="#${id}"]`
            );
            if (activeLink) activeLink.classList.add('active');
        }
    });

    /* ============================= STICKY HEADER =============================== */
    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    /* ============================= CLOSE MENU ON SCROLL (MOBILE) =============================== */
    if (menuIcon && navbar) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
});

/* ============================= SCROLL REVEAL =============================== */
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal(
        '.home-content, .home-image, .about-img, .about-content, .services-container, .services-box, .portfolio-container, .portfolio-box, .contact-form, .input-box',
        {
            origin: 'top',
            distance: '40px',
            duration: 800,
            interval: 150,
            reset: false
        }
    );
}

/* ============================= TYPED JS =============================== */
if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: ['Samuel Divina'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
}
