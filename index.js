let carrossel = document.getElementById('scroll');

const scrollSlide = (mover) => {
    carrossel.scroll({left: mover? carrossel.scrollLeft - 900 : carrossel.scrollLeft + 900, behavior: 'smooth'}) 
}