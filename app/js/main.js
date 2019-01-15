

$(document).ready(function($) {
    // FIXED MENU start

         $(window).on('scroll', function(){
              var win = $(this);
              if (win.width() >= 1024) { 
                $(window).bind('scroll', function() {
                  if($(document).scrollTop() > 10){
                    // $('.first-screen__slide').css('margin-top', '180px');
                    $('.scroll-none').css('display', 'none');
                    
                    $('.header-logo').css('max-width', '11rem');
                    $('.header-col').css('display', 'flex');
                    $('.header').css('padding', '0.5rem 0');
                    $('.accordion').css({
                        'align-items': 'center',
                        'width': '100%'
                    });
                    $('.header-navigation').css('display', 'flex');
                    $('.header-menu h3').css('margin-bottom', '0');
                    $('.header-btn .btn').addClass('calendar-none');
                    $('.mobile-btn').css('display', 'flex');
                    $('.header-btn').css('align-items', 'center');
                    $('.header-menu ul').addClass('dis-none');
                     $('.header-menu h3').on('click', function() {
                            $(this).toggleClass('header-menu-open');
                        });
                     }else{
                    // $('.first-screen__slide').css('margin-top', '0');
                    $('.scroll-none').css('display', 'flex');
                    $('.header-logo').css('max-width', '15rem');
                    $('.header-col').css('display', 'block');
                    $('.header').css('padding', '1rem 0');
                    $('.accordion').css({
                        'align-items': 'flex-start',
                        'width': '100%'
                    });
                    $('.header-menu ul').removeClass('dis-none');
                    $('.header-navigation').css('display', 'inherit');
                    $('.header-menu h3').css('margin-bottom', '0.5rem');
                    $('.header-btn .btn').removeClass('calendar-none');
                    $('.mobile-btn').css('display', 'none');
                    $('.header-btn').css('align-items', 'flex-start');
                     $('.header-menu h3').next().css('transition', 'none');
                     $('.header-menu h3').removeClass('header-menu-open');
                    $('.header-menu h3').next().slideOut(400);
                    // $('.header-menu h3').mouseout(function() {
                    //     $(this).next().fadeOut();
                    //     $(this).next().css('display', 'none');
                    // });
                  }
                })
              }
        });
         
        // FIXED MENU end
// $(window).on('change', function(){
//     if ( $(".header-btn .btn").hasClass("calendar-none")) {
//          $('.header-menu h3').on('click', function() {
//             $(this).toggleClass('header-menu-open');
//             $(this).next().slideToggle('fast', function() {
//             });
//         });
//     } else{
//          $('.header-menu h3').removeClass('header-menu-open');
//             $('.header-menu h3').next().slideOut('fast', function() {
//                 // $('.header-menu h3').next().css('display', 'none');
//             });
//     }
// });

    // HUMBURGER MENU start
     $('.menu-toggle').on('click', function() {
      $(this).toggleClass('is-active');
      $('.header-navigation').slideToggle();
    });

     

    // $(function() {
    //     var Accordion = function(el, multiple) {
    //         this.el = el || {};
    //         this.multiple = multiple || false;

    //         // Variables privadas
    //         var links = this.el.find('.link');
    //         // Evento
    //         links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    //     }

    //     Accordion.prototype.dropdown = function(e) {
    //         var $el = e.data.el;
    //             $this = $(this),
    //             $next = $this.next();

    //         $next.slideToggle();
    //         $this.parent().toggleClass('open');

    //         if (!e.data.multiple) {
    //             $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    //         };
    //     }   

    //     var accordion = new Accordion($('#accordion'), false);
    // });
    // HUMBURGER MENU end



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