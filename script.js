 // Hero Slider
 let currentSlide = 0;
 const slides = document.querySelectorAll('.hero-slide');

 function showSlide(n) {
     slides[currentSlide].classList.remove('active');
     currentSlide = (n + slides.length) % slides.length;
     slides[currentSlide].classList.add('active');
 }

 function changeSlide(dir) {
     showSlide(currentSlide + dir);
 }

 setInterval(() => changeSlide(1), 5000);

 // Mobile menu
 function toggleMobileMenu() {
     document.getElementById('mobileMenu').classList.toggle('open');
 }

 // Scroll to top visibility
 window.addEventListener('scroll', () => {
     const btn = document.getElementById('scrollTop');
     btn.classList.toggle('visible', window.scrollY > 400);
 });