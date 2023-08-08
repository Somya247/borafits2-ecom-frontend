document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Increment slide index and reset to 0 when exceeding the number of slides
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds (adjust the time as needed)
    setTimeout(showSlides, 3000);
  }
});