const header = document.getElementById('Header');

const carouselButtonBefore = document.getElementById('Carousel-button-before');
const carouselButtonNext = document.getElementById('Carousel-button-next');
const carouselItems = [...document.getElementsByClassName('Carousel-item')];

// Navbar
const navbar = document.getElementById('Navbar');
const hamburger = document.getElementById('Hamburger');

// Encuentros Slide Cards
const encuentrosCards = document.getElementById('Encuentros-cards');
const cards = [...encuentrosCards.children];
const EncuentrosBtnAfter = document.getElementById('Encuentros-btn--after');
const EncuentrosBtnBefore = document.getElementById('Encuentros-btn--before');



// Margen a todo el body
document.body.style.marginTop = header.offsetHeight + 'px';

// Carousel
if (carouselItems.length > 0) {
    let i = 0;
    carouselItems[0].classList.add('is-active');
    function toggleActive() {
        i >= carouselItems.length ? i = 0 : null;
        i < 0 ? i = carouselItems.length - 1 : null;
        carouselItems.forEach(item => item.classList.remove('is-active'));
        carouselItems[i].classList.add('is-active');
    }
    carouselButtonNext.addEventListener('click', () => {
        i++;
        toggleActive();
    });
    carouselButtonBefore.addEventListener('click', () => {
        i--;
        toggleActive();
    });
}

navbar.style.top = header.offsetHeight + 'px';

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
});


// Encuentros Slide Cards
let i = 0;
function handleEncuentrosCards() {
    if (i < -cards.length + 1) {
        i = 0;
    }
    if (i > 0) {
        i = -cards.length + 1;
    }
    for (const card of cards) {
        card.style.transform = `translateX(${i * 100}%)`;
        console.log(i);
    }
}
EncuentrosBtnAfter.addEventListener('click', () => {
    i++;
    handleEncuentrosCards();
});
EncuentrosBtnBefore.addEventListener('click', () => {
    i--;
    handleEncuentrosCards();
});