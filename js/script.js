$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    var navHeight = $("#main-nav").outerHeight();
	  if (scroll > navHeight) {
	      $("#main-nav").addClass("scroll");
	  }
      else {
	      $("#main-nav").removeClass("scroll");
      }
  });
});

//
//$(document).on('click', 'a[href^="#"]', function (event) {
//    event.preventDefault();
//
//    $('html, body').animate({
//        scrollTop: $($.attr(this, 'href')).offset().top
//    }, 500);
//});

$('a[href*="#"]:not([href="#"])').click(function(){
    console.log('test');
    $('html, body').animate({ scrollTop:
    $(this.hash).offset().top - 100 }, 900);
});