// Hamburger izvēlnes funkcionalitāte
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
// Funkcija, lai pārvaldītu modal logu
const openModalBtn = document.querySelector('.open-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');

AOS.init();


// Atver modal logu
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
});

// Aizver modal logu
closeModal.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});

// Aizver modal logu, noklikšķinot ārpus tā
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
    }
});


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Pievieno vai noņem "show" klasi
});

