


(function ($){
  "use strict"

// Navbar on scrolling

$(window).scroll(function (){
  if($(this).scrollTop() > 200){
    $('.navbar').fadeIn('slow').css('display','flex');
  }else{
    $('.navbar').fadeOut('slow').css('display','none');
  }
});







      // Typed Initiate
      if($('.typed-text-output').length == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output',{
          strings:typed_strings.split(', '),
          typeSpeed:100,
          backSpeed:20,
          smartBackspace:false,
          loop:true
        });

        // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          loop: true,
          items: 1
        });

       // portfolio isotope and filter
       var portfolioIsotope = $('.portfolio-container').isotope({
         itemSelector: '.portfolio-item',
         layoutMode: 'fitRows'
       });
       $("#portfolio-flters li").on('click', function(){
         $("#portfolio-filters li").removeClass('active');
         $(this).addClass('active');

         portfolioIsotope.isotope({filter: $(this).data('filter')});
       });

        // skill bar

        $('.skill').waypoint(function (){
          $('.progress .progress-bar').each(function (){
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
          });
        }, {offset: '80%'});




    }

})(jQuery);
