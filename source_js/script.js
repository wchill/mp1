var sections = $('section');
var navBar = $('nav');

$(window).on("scroll touchmove", function () {
  $('#header-nav').toggleClass('smaller', $(document).scrollTop() > 0);
  var currentPosition = $(document).scrollTop();
  var currentPosBottom = currentPosition + $(window).height();
  sections.each(function() {
    var topPos = $(this).offset().top;
    var bottomPos = topPos + $(this).outerHeight();
    console.log('cur: ' + currentPosition + 'bot: ' + currentPosBottom + ' top: ' + topPos + ' bottom: ' + bottomPos);
    if(currentPosBottom == bottomPos) {
      navBar.find('a').removeClass('active');
      navBar.find('a[section="'+$(this).attr('id')+'"]').addClass('active');
    } else if (currentPosition + navBar.height() >= topPos && currentPosition <= bottomPos) {
      navBar.find('a').removeClass('active');
      navBar.find('a[section="'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$('nav > a').on('click', function(e) {
  e.preventDefault();
  var id= $(this).attr('section');
  var navbarHeight = 100;
  var targetPosition = $('#' + id).offset().top;
  if(targetPosition - navbarHeight > navbarHeight) {
    navbarHeight -= 25;
  }
  targetPosition -= navbarHeight;
  $('html, body').animate({scrollTop: targetPosition}, 500);
});

$('#testimonials > div > div.col > a').on('click', function(e) {
  e.preventDefault();
  $('#modal-window').addClass('modal-visible');
  $('#modal-image').attr('src', $(this).find('img.modal').attr('src'));
});

$('#modal-close').on('click', function(e) {
  e.preventDefault();
  $('#modal-window').removeClass('modal-visible');
});

var baseImagesUrl = './media/';
var carouselImages = ['cat1.png', 'cat2.png', 'cat3.png', 'cat4.png', 'cat5.png', 'cat6.png'];
var carouselIndex = 0;

$('#carousel-prev').on('click', function(e) {
  e.preventDefault();
  carouselIndex = (carouselIndex + carouselImages.length - 1) % carouselImages.length;
  $('#carousel-img').attr('src', baseImagesUrl + carouselImages[carouselIndex]);
});

$('#carousel-next').on('click', function(e) {
  e.preventDefault();
  carouselIndex = (carouselIndex + 1) % carouselImages.length;
  $('#carousel-img').attr('src', baseImagesUrl + carouselImages[carouselIndex]);
});
