 var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    speed: 1000,
    autoplay: true,
    interval: 3000, 
    pauseOnHover: false, 
    pauseOnFocus: false,
    arrows: false,
    breakpoints: { 
        776: { perPage: 2 },
        489: { perPage: 1 }
    }
});

splide.mount();



