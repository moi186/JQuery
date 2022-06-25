/************ Scroll Reveal **********/

window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.header-btn', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom'
});

sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});
/************** JQuery ************/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function() {

    $("#readMore").click(function() {

        alert("una alerta con un mensaje");

    });

});

$(document).ready(function() {

    $("#h4").hide();
});


//footer bottons 

$(document).ready(function() {
    $("#hide").click(function() {
        $("#footertxt").hide();

    });

});

$(document).ready(function() {
    $("#show").click(function() {
        $("#footertxt").show();


    });
});

$(document).ready(function() {
    $("#toggle").click(function() {
        $("#footertxt").toggle("#footertxt");
    });
});