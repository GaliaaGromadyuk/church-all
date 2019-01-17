$(window).on('scroll', function(){

    var scroll = $(window).scrollTop();

});

$(document).ready(function($) {
    // FIXED MENU start
    var mq1000min = window.matchMedia( "(min-width: 1000px)" );
    var mq991min = window.matchMedia( "(min-width: 991px)" );
      if (mq991min.matches) {
        $('.link').click(function() {
            if($(window).scrollTop() < 100){
                
                
            }
            else{
                var ths = $(this);
                $(ths).toggleClass('header-menu-open');
                $('.header-menu h3').not(this).removeClass('header-menu-open');
            }
        });


        $(window).on('scroll', function (){
            if($(window).scrollTop() < 100){
            $('.link').each(function($key,$item){
                $($item).removeClass('header-menu-open');
            });
        }
    });



        $(window).on('scroll', function(){
              
              if($(document).scrollTop() > 100){
                $('.header').addClass('header-fixed');
                $('.header-btn .btn').addClass('calendar-none');
                $('.header-menu ul').addClass('dis-none');   
                 } else{
                $('.header').removeClass('header-fixed');
                $('.header-menu ul').removeClass('dis-none');
                $('.header-btn .btn').removeClass('calendar-none');
          }
              
        });
    }
        // FIXED MENU end

// HUMBURGER MENU start
     $('.menu-toggle').on('click', function() {
      $(this).toggleClass('is-active');
      $('.header-navigation').slideToggle();
    });

     var mq991 = window.matchMedia( "(max-width: 991px)" );


        $(function() {     
            if (mq991.matches) {
                var Accordion = function(el, multiple) {
                    this.el = el || {};
                    this.multiple = multiple || false;

                    // Variables privadas
                    var links = this.el.find('.link');
                    // Evento
                    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
                }

                Accordion.prototype.dropdown = function(e) {
                    var $el = e.data.el;
                        $this = $(this),
                        $next = $this.next();

                    $next.slideToggle();
                    $this.parent().toggleClass('open');

                    if (!e.data.multiple) {
                        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
                    };
                }   

                var accordion = new Accordion($('#accordion'), false);
            }
        });
        
    
// HUMBURGER MENU end



var heightHeader = $('.header').height();
$('.main').css('margin-top', heightHeader);

$('.first-screen__slide').css('height', 'calc(100vh - ' + heightHeader + 'px)' );

var heightFooter = $('.footer').height();
// $('.main').css('height', 'calc(100% - ' + heightFooter + 'px - ' + heightHeader + 'px)' );
// $('body').css('height', 'calc(100% - ' + heightFooter + 'px)' );



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

  $("#cc").inputmask({
    mask: '9999  9999  9999  9999',
    placeholder: 'X'
  });

  $("#month").inputmask({
    mask: '99',
    placeholder: 'X'
  });

  $("#year").inputmask({
    mask: '99',
    placeholder: 'X'
  });

  $("#cvv").inputmask({
    mask: '999',
    placeholder: 'X'
  });


});