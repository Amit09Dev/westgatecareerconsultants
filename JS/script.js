// -------------------------------------------------------------country carousel----------------------------------------------
$(".country_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 100,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa fa-chevron-left"></i>', '<i class="fa-solid fa fa-chevron-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        320: {
            items: 1
        },
        767: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }

});