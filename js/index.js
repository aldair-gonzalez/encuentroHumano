const header = document.getElementById('Header');

// Margen a todo el body
document.body.style.marginTop = header.offsetHeight + 'px';

const carouselButtonBefore = document.getElementById('Carousel-button-before');
const carouselButtonNext = document.getElementById('Carousel-button-next');

const carouselItems = [...document.getElementsByClassName('Carousel-item')];


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