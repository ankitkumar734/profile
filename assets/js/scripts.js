$(document).ready(function () {
    $(window).scroll(function () {
        // sticky nav-bar on scroll script
        if (this.scrollY > 20) {
            $('.nav-bar').addClass("sticky");
        } else {
            $('.nav-bar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.nav-bar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/nav-bar script
    $('.menu-btn').click(function () {
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designing", "Web Developer", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designing", "Web Developer", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });




    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1800,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home', {});
sr.reveal('.home-content', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 300 });

/*SCROLL ABOUT*/
sr.reveal('.about', {});
sr.reveal('.about-content', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });
/*SCROLL SKILLS*/
sr.reveal('.skills', {});
sr.reveal('.skills-content', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL PROJECTS*/
sr.reveal('.project', {});
sr.reveal('.carousel', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact', {});
sr.reveal('.contact-content', { interval: 200 });

/* JavaScript for Read More Toggle */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".read-more-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const moreContent = this.closest(".col-md-7").querySelector(".more-content");

            if (moreContent) {
                moreContent.classList.toggle("show");

                if (moreContent.classList.contains("show")) {
                    this.textContent = "Read Less";
                } else {
                    this.textContent = "Read More";
                }
            }
        });
    });
});

