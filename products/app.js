var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    cssMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});


function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
  document.getElementById("btn").classList.toggle("margin")
}
