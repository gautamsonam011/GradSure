let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// menu icon 
function myFunction(x) {
    x.classList.toggle("change");}

// >> navbar code ........... 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "50px";
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

AOS.init();

// >>>>>>>>>>>>>register form>>>>>>>>>>>>> 
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// code of achievement part 
// const counter = document.querySelectorAll('#count');
// counter.forEach(counter => {
//   counter.innerText = '0'
//   const updateCounter = () => {
//     const target = +counter.getAttribute('data-val');
//     const c = +counter.innerText;
//     const increment = target / 500;
//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     }

//   };
//   updateCounter();
// });
// scroll header 


