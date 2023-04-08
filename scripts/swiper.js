const swiper = new Swiper('#auto-swiper', {
    loop: true,
    autoplay: {
      pauseOnInteraction: true,
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  const carouselSwiper = new Swiper('#carousel-swiper', {
    loop: true,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


