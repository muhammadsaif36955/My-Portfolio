$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
    
     // typing text animation script
     var typed = new Typed(".typing", {
        strings: [ "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    //My Projects demo btn link script

    $('#demo1').click(function(){
        window.open("https://business-website-7eb0d.web.app");
    });
    $('#demo2').click(function(){
        window.open("https://secondwebpage-69e68.web.app");
    });

    $('#demo3').click(function(){
        window.open("https://book-list-25e69.web.app");
    });

    $('#demo4').click(function(){
        window.open("https://loan-calculator-f0078.web.app");
    });

    $('#demo5').click(function(){
        window.open("https://to-do-list-68b42.web.app");
    });



    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    

    // smooth scrolling  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
      },
        500, 
        'linear'
      ); 
    }); 
  });
