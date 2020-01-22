$(function() {
  $('.header_sliders').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('.mains_sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
let butnUp = document.querySelector('.butnUp-js');

document.addEventListener('scroll', function(e) {
  if (window.pageYOffset > 500) {
    butnUp.style.opacity = '1';
  } else if (window.pageYOffset < 200) {
    butnUp.style.opacity = '0';
  }
});

$('.butnUp-js').on('click', function() {
  console.log(1111);
  $('html,body').animate({ scrollTop: 0 }, 1000);
});

// native js code
// let links = document.querySelectorAll('.header_li');
// console.log(links);
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(this.dataset.id);
//     let id = document.querySelector(this.dataset.id);
//     let coords = id.getBoundingClientRect().top;
//     window.scrollTo(0, coords);
//   });
// }

$('.header_li').on('click', function(e) {
  e.preventDefault();
  console.log($(this));
  let attr = $(this).attr('data-id');
  let h = $(attr).offset().top;
  console.log(h);
  $('html,body').animate({ scrollTop: h }, 2000);
});
