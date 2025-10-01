// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll suave para anclas
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Validación de formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos.');
            e.preventDefault();
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            alert('Por favor, ingresa un email válido.');
            e.preventDefault();
        }
    });
}

// Botón volver arriba
const btnUp = document.createElement('button');
btnUp.innerText = '↑';
btnUp.id = 'btnUp';
btnUp.style.position = 'fixed';
btnUp.style.bottom = '30px';
btnUp.style.right = '30px';
btnUp.style.display = 'none';
btnUp.style.background = '#e94560';
btnUp.style.color = '#fff';
btnUp.style.border = 'none';
btnUp.style.borderRadius = '50%';
btnUp.style.width = '40px';
btnUp.style.height = '40px';
btnUp.style.fontSize = '1.5rem';
btnUp.style.cursor = 'pointer';
document.body.appendChild(btnUp);
window.addEventListener('scroll', () => {
    btnUp.style.display = window.scrollY > 200 ? 'block' : 'none';
});
btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Galería de imágenes con lightbox
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});
