
 document.addEventListener("DOMContentLoaded", function () {
    // Select the .overview-hero section
    const overviewHeroSection = document.querySelector(".overview-hero");
    const container = overviewHeroSection.querySelector(".container");
    const img = container.querySelector(".overview-hero-image img"); // Select the <img> element directly

    // Now, change the src attribute
    img.src = "healthy_life.jpg";

    const learnabout= document.querySelector(".learn-about");
    const contain= learnabout.querySelector(".container");
    const caRds = contain.querySelectorAll(".cards img");
    
    caRds[0].src = "ai_health.jpeg";
    caRds[1].src = "fit_track.jpg";
    caRds[2].src = "health.avif";

});


