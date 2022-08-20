const header = document.getElementById('Header');

// Carousel
const carouselButtonBefore = document.getElementById('Carousel-button-before');
const carouselButtonNext = document.getElementById('Carousel-button-next');
const carouselItems = [...document.getElementsByClassName('Carousel-item')];

// Navbar
const navbar = document.getElementById('Navbar');
const hamburger = document.getElementById('Hamburger');

// Encuentros Slide Cards
const encuentrosCards = document.getElementById('Encuentros-cards');
const EncuentrosBtnAfter = document.getElementById('Encuentros-btn--after');
const EncuentrosBtnBefore = document.getElementById('Encuentros-btn--before');

// Slide
const ReferencesItem = [...document.getElementsByClassName('References-item')];
const ReferencesButtonBefore = document.getElementById('References-button-before');
const ReferencesButtonAfter = document.getElementById('References-button-after');
const ReferencesCircles = [...document.getElementsByClassName('References-circle')];



// Margen a todo el body
document.body.style.marginTop = header.offsetHeight + 'px';


// Carousel
function handleCarousel(array, after, before, circles) {
    if(array) {
        if (array.length > 0) {
            let i = 0;
            array[0].classList.add('is-active');
            circles ? circles[0].classList.add('is-active') : null;
            function toggleActive() {
                i >= array.length ? i = 0 : null;
                i < 0 ? i = array.length - 1 : null;
                array.forEach(item => item.classList.remove('is-active'));
                array[i].classList.add('is-active');
                circles ? circles.forEach(item => item.classList.remove('is-active')) : null;
                circles ? circles[i].classList.add('is-active') : null;
            }
            after.addEventListener('click', () => {
                i++;
                toggleActive();
            });
            before.addEventListener('click', () => {
                i--;
                toggleActive();
            });
        }
    }
}

carouselItems ? handleCarousel(carouselItems, carouselButtonNext, carouselButtonBefore) : null;
ReferencesItem ? handleCarousel(ReferencesItem, ReferencesButtonAfter, ReferencesButtonBefore, ReferencesCircles) : null;


navbar.style.top = header.offsetHeight + 'px';

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
});


// Encuentros Slide Cards
if (encuentrosCards) {
    const cards = [...encuentrosCards.children];
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
}


// Formulario de mail

const form = document.getElementById('Form');
const formMail = document.getElementById('Form-mail');
const formName = document.getElementById('Form-name');
const formMessage = document.getElementById('Form-message');
const formInput = [...document.getElementsByClassName('Form-input')];

// Validacion de formulario
// Inputs no deben de estar vacios
function validateForm() {
    let isValid = true;
    formInput.forEach(input => {
        if (input.value === '') {
            isValid = false;
        }
        /*
            No se permite ingresar caracteres especiales
            Solo se pueden agregar
            - Letras
            - Numeros
            - Espacios
            - Guiones
            - Guiones bajos
            - Punto
            - Comillas
            - Arroba
            - Puntos suspensivos
        */
        if (input.value.match(/[^a-zA-Z0-9\s-_.,@]/g)) {
            isValid = false;
        }
    });
    return isValid;
}

(function(){
    emailjs.init("-k5HyJjMsUasrk8RS");
})();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        const templateParams = {
            from_name: formName.value + ' ' + formMail.value,
            to_name: 'Laura',
            mensaje: formMessage.value
        }
        emailjs.send('service_7irjt7a', 'template_vh96tr8', templateParams)
            .then(function(response) {
                   console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
               console.log('FAILED...', error);
        });
        alert('Gracias por contactarnos');
    } else {
        alert('Favor de llenar todos los campos sin caracteres especiales');
    }
});