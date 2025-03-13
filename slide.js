let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    
    // Link to a new page after the slideshow ends
    if (slideIndex === slides.length) {
        setTimeout(function() {
            // Start fading the page overlay before redirecting
            document.getElementById("page-overlay").style.opacity = 1;
            
            // Redirect after 1.5 seconds (to match the fade-out duration)
            setTimeout(function() {
                window.location.href = "ask.html"; // Change to your desired page
            }, 1500);
        }, 1500);  // Wait until the last image fades
    }
}

// Run the slideshow every 5 seconds
setInterval(showSlides, 5000);

// Start the slideshow on page load
showSlides();