const header = document.getElementById('Header');

/*
// Carousel
*/
// const ToReturn = document.getElementById('To-return');
// const ToNext = document.getElementById('To-next');
// const CarouselItems = [...document.querySelectorAll('.Carousel-item')];


// Margen a todo el body
document.body.style.marginTop = header.offsetHeight + 'px';


// let i = 0;

// function handleClick() {
//     i === CarouselItems.length ? i = 0 : null;
//     i < 0 ? i = CarouselItems.length - 1 : null;

//     CarouselItems.forEach(item => {
//         item.style.transform = `translateX(-${i * 100}%)`;
//     });
// }
// ToNext.addEventListener('click', () => {
//     i++
//     handleClick();
// });
// ToReturn.addEventListener('click', () => {
//     i--;
//     handleClick();
// });