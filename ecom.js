let slideShow = 0;
showSlides();

let slideShow2 = 0;
showSlides2();

let slideShow3 = 0;
showSlides3();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideShow++;
  if (slideShow > slides.length) {slideShow = 1}
  slides[slideShow-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("slides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideShow2++;
  if (slideShow > slides.length) {slideShow = 1}
  slides[slideShow-1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("slides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideShow3++;
  if (slideShow > slides.length) {slideShow = 1}
  slides[slideShow-1].style.display = "block";
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}





document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
e.preventDefault(); // Stop form from submitting

// Get values from inputs
const firstName = document.getElementById('first-name').value.trim();
const lastName = document.getElementById('last-name').value.trim();
const contactMethod = document.getElementById('contact').value;
const phone = document.getElementById('phone-number').value.trim();
const email = document.getElementById('email').value.trim();
const comment = document.getElementById('comment').value.trim();
const date = document.getElementById('contact-date').value;

// Simple checks
if (firstName === '') {
alert('Please enter your first name');
return;
}

if (lastName === '') {
alert('Please enter your last name');
return;
}

if (contactMethod === '') {
alert('Please select a contact method');
return;
}

if ((contactMethod === 'phone-number' || contactMethod === 'phone-email') && phone === '') {
alert('Please enter your phone number');
return;
}

if ((contactMethod === 'email' || contactMethod === 'phone-email') && email === '') {
alert('Please enter your email');
return;
}

if (comment.length < 5) {
alert('Please enter a longer comment');
return;
}

if (date === '') {
alert('Please select a date');
return;
}

// If all checks pass
alert('Form submitted successfully!');
form.reset();
});
});