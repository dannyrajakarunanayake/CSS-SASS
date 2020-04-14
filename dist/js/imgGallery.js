const slides = document.querySelectorAll('.slide');
const next = document.querySelectorAll('#next');
const prev = document.querySelectorAll('#prev');

// auto slides
const auto = true;
const intervalTime=8000;

let slideInterval

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current')
  if(current.nextElementSibling){
    current.nextElementSibling.classList.add
    ('current');
  }else{
    slides[0].classList.classList.add('current')
  }

  setTimeout(() => current.add('current'));
};
next.addEventListener('click', e => {
  nextSlide();
  if(auto){
    clearInterval(slideInterval);
    slideInterval=setInterval(nextSlide,
      intervalTime);
  }
});

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current')
  if(current.nextElementSibling){
    current.nextElementSibling.classList.add
    ('current')
  }else{
    slides[slides.length - 1].classList.add('current')
  }

  setTimeout(() => current.classList.remove('current'));
};
prev.addEventListener('click', e => {
  pervSlide();
});

if(auto){
  slideInterval=setInterval(nextSlide, intervalTime)
}