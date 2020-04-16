$(function(){
  // smooth scroll

  $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      $('.hamburger').removeClass('hamburger--active');
      $('.hamburger-menu').stop().fadeOut(200);
      return false;
   });

  // first fade in

  $('.eyecatch, .title, .sub-title, .hamburger').hide();

  $('.eyecatch').fadeIn(3000);
  setTimeout(function(){
    $('.title').fadeIn(1000);
    setTimeout(function(){
      $('.sub-title').fadeIn(1000);
      setTimeout(function(){
        $('.hamburger').fadeIn(1000);
      },200);
    },200);
  },2000);


  // hamburger menu toggle

  $('.hamburger').click(function(){
    $(this).toggleClass('hamburger--active');
    let isActive = $(this).hasClass('hamburger--active');
    if(isActive){
      $('.hamburger-menu').stop().fadeIn(200);
    }else{
      $('.hamburger-menu').stop().fadeOut(200);
    }
  });
});
