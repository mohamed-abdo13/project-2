let upBtn = document.querySelector('.up-btn');
let sticky = document.querySelector('.navbar');


window.addEventListener("scroll", function () {
    sticky.classList.toggle("sticky", window.scrollY > 0 );
    upBtn.classList.toggle("show", window.scrollY > 500);
} );


upBtn.addEventListener('click', function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
});

