// FIXED MENU start
 $(window).on('resize', function(){
      var win = $(this);
      if (win.width() >= 1024) { 
        $(window).bind('scroll', function() {
          if($(window).scrollTop() > 200){
            $('.header').addClass('fixed');
            $('.first-screen__slide').css('margin-top', '180px');
            $('.scroll-none').css('display', 'none');
            $('.header-logo').css('height', '3rem');
            $('.header-col').css('display', 'flex');
            $('.header').css('padding', '0.5rem 0');
            
          }else{
            $('.header').removeClass('fixed');
            $('.first-screen__slide').css('margin-top', '0');
            $('.scroll-none').css('display', 'flex');
            $('.header-logo').css('height', 'auto');
            $('.header-col').css('display', 'block');
            $('.header').css('padding', '1rem 0');
          }
        })
      }
});
// FIXED MENU end

jQuery(document).ready(function($) {

    // SELECT STYLE start
	$('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });
 // SELECT STYLE end


    var headerHeight = $('.header').height();
    // $('.first-screen__slide').css({
    //     'margin-top': headerHeight,
    //     'height': 'calc(100vh - '+headerHeight+')'
    // });

// SLIDER FIRST SCREEN start
    $('.first-screen__slider').slick({
      dots: true,
      arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        slide: ".first-screen .slide",
    });
    
// SLIDER FIRST SCREEN end

// SLIDER NEWS HOME start
    $('.news-slider').slick({
      dots: false,
      arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        slide: ".news-slide",
        responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
          }
        }
        ]
    });
    
// SLIDER NEWS HOME end


});