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
  setTimeout(showSlides2, 2000); 
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
  setTimeout(showSlides3, 2000); 
}


