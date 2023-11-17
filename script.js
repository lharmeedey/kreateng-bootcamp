const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button_right');
const prevButton = document.querySelector('.carousel_button_left');
const nav = document.querySelector('.carousel_nav');
const dots = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// slides[0].style.left = slideWidth * 0 + 'px';;
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// console.log(slideSize)

const slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(slidePosition)


const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// Move the slides to the right 
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide)
})
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide)
})

// Update nav
// const updateDots = (currentDot, targetNav) => {
//     currentDot.classList.remove('current-slide');
//     targetNav.classList.add('current-slide')
// }



nav.addEventListener('click', e => {

    const targetDot = e.target.closest('button');

   
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current_slide');
    const currentDot = nav.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide,  targetSlide);


    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');

    




    // const targetNav = e.target.closest('button');
   
    // if(!targetNav) return;
    // const currentSlide = track.querySelector('.current_slide');
    // const currentDot = nav.querySelector('.current_slide');
    // const targetIndex = dot.findIndex(dot => dot === targetNav)
    // const targetSlide = slides[targetIndex];

    // moveToSlide(track, currentSlide, targetSlide);
    // currentDot.classList.remove('current_slide');
    // targetNav.classList.add('current_slide')

    // updateDots(currentDot, targetNav)
})