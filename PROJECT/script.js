document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');

    let counter = 0; 
    const totalImages = images.length;
    const slideWidth = carouselSlide.clientWidth;

    function slide() {
        if (counter >= totalImages) {
            counter = 0; 
        }

        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
        counter++;
    }

    setInterval(slide, 3000);
});
