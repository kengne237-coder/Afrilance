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
 //contact
 document.getElementById("contactForm").addEventListener("submit", function(e) {

     e.preventDefault();

     let prenom = document.getElementById("prenom").value;
     let nom = document.getElementById("nom").value;
     let telephone = document.getElementById("telephone").value;
     let email = document.getElementById("email").value;
     let message = document.getElementById("message").value;

     let contact = {
         prenom: prenom,
         nom: nom,
         telephone: telephone,
         email: email,
         message: message
     };

     localStorage.setItem("contactForm", JSON.stringify(contact));

     alert("Message enregistré dans le navigateur");

     document.getElementById("contactForm").reset();

 });