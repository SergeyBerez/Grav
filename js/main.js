$(function() {
  $('.header_sliders').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
  });

  $('.mains_sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
