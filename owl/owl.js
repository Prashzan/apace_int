$(document).ready(function () {
  $("#customers").owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 4000,
    // autoplay: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // owl carousel
  $(".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
});

$(document).ready(function () {
  $("#partners").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  });

  //owl carousel
  $(".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
});

$(document).ready(function () {
  $("#sponsor").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    // autoplay: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //owl carousel
  $(".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
});
