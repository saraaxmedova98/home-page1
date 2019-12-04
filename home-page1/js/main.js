$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots:false,
    responsive:{
        1:{
            items: 3,
            dots: false
        },
        600:{
            items:4
        },
        800:{
            items:5
        },
        1000:{
            items:6
        }
    }
})