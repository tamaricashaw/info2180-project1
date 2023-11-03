
 document.addEventListener("DOMContentLoaded", function () {
    // Select the .overview-hero section
    const overviewHeroSection = document.querySelector(".overview-hero");
    const container = overviewHeroSection.querySelector(".container");
    const img = container.querySelector(".overview-hero-image img"); // Select the <img> element directly

    // Now, change the src attribute
    // img.src = "healthy_life.jpg";
    img.src = "pic1.svg";

    const learnabout= document.querySelector(".learn-about");
    const contain= learnabout.querySelector(".container");
    const caRds = contain.querySelectorAll(".cards img");
    caRds[0].src = "pic3.svg";
    caRds[1].src = "pic4.svg";
    caRds[2].src = "pic5.svg";

    const stor= document.querySelector(".stories");
    const containStor= stor.querySelectorAll(".container img");
    containStor[0].src = "pic6.jpg";
    containStor[1].src = "pic7.jpg";

    let classNews =document.querySelector(".newsletter");
    let bttn = classNews.querySelector(".btn");
    let mail = classNews.querySelector("#email");


    bttn.addEventListener("click", function(){

        let msg = classNews.querySelector(".message");
        
        let inputVal =mail.value;
        let len =inputVal.length;
        
        if (len != 0) {
            let msgElement = `Thank you! Your email address ${inputVal} has been added to our mailing list`;
            msg.textContent+= " " + msgElement;
            alert(msgElement);
        }else{
            msgElement= "Please enter a valid email address.";
            msg.textContent+= " " + msgElement;
            alert(msgElement);
        }
    })
});


