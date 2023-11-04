
 document.addEventListener("DOMContentLoaded", function () {
    
    //Accessing the image tag first in the overview hero class before changinh
    //img src and alt
    const overviewHeroSection = document.querySelector(".overview-hero");
    const container = overviewHeroSection.querySelector(".container");
    const img = container.querySelector(".overview-hero-image img"); 
    img.src = "pic1.svg";
    img.alt = "World health day image"

    //Accessing the images tag from the learn about class and then setting
    // the src and alt
    const learnabout= document.querySelector(".learn-about");
    const contain= learnabout.querySelector(".container");
    const caRds = contain.querySelectorAll(".cards img");
    caRds[0].src = "pic3.svg";
    caRds[0].alt = "ai and health";

    caRds[1].src = "pic4.svg";
    caRds[1].alt = "Woman running with fitness tracker";

    caRds[2].src = "pic5.svg";
    caRds[2].alt = "woman living healty lifestyle";

    //Accessing the images tag from the stories class before setting their
    //src and alt
    const stor= document.querySelector(".stories");
    const containStor= stor.querySelectorAll(".container img");
    containStor[0].src = "pic6.jpg";
    containStor[0].alt = "handsome man in business suit";

    containStor[1].src = "pic7.jpg";
    containStor[1].alt = "picture of a lab";

    //Getting email button and email from newsletter class
    let classNews =document.querySelector(".newsletter");
    let bttn = classNews.querySelector(".btn");
    let mail = classNews.querySelector("#email");

    //function for what happens when you click the subscribe button
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


