document.addEventListener("DOMContentLoaded", function () {


    /*Function to find the element that is wider than the body of the page*/
    const docWidth = document.documentElement.offsetWidth;

    [].forEach.call(
        document.querySelectorAll('*'),
        function (el) {
            if (el.offsetWidth > docWidth) {
                console.log(el);
            }
        }
    );

    /*Hamburger nav function*/
    const navBlock = document.querySelector('.header-nav');
    const navDesktop = document.querySelector('.header-desktop-nav');
    const hamburgerIcon = document.querySelector('.hamburger');
    const navLink = document.querySelectorAll(".header-nav-link");
    const navLogo = document.querySelector(".header-logo-hamburger");
    const body = document.querySelector("body");

    const hamburgerClick = () => {
        navBlock.classList.toggle("open");
        hamburgerIcon.classList.toggle("active");
        navLogo.classList.toggle("active");
        body.classList.toggle("not-scroll");
    };

    hamburgerIcon.addEventListener('click', function () {
        hamburgerClick();
    });

    navDesktop.addEventListener('click', function (event) {
        event.stopPropagation()
    })


    navBlock.addEventListener('click', function () {
        hamburgerClick();
    });

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function () {
            hamburgerClick();
        });
    };


});

