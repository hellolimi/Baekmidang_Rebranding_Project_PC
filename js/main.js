/* pop_up */

$(document).ready(function(){
    
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.pop_up';
    var chkbox = '#not_today';
    
   
    $(popup).find('form a').click(function(e){
        e.preventDefault();
        
        var chk = $(chkbox).prop('checked');
        
        if(chk){ 
            setCookie('exCookie','done',1); 
        }
        
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    var chk = $(chkbox).prop('checked');
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
    
}); 



/*area_selection*/
$(document).ready(function(){
    var btn = '.area_selection button';
    var speed = 'fast';
    var icon = '.icon';
    var active = 'active';
    
    $(btn).click(function(e){
        e.preventDefault();
        
        $(this).next().stop().slideToggle(speed);
        $(this).find(icon).toggleClass(active); 
    });
    
    $(btn).next().find('a').click(function(e){
        e.preventDefault();
        
        var content =  $(this).text();
        $(btn).find('.text').text(content);
        
        $(btn).next().slideUp(300);
    });
    
    $(btn).parent().mouseleave(function(){
        $(this).find('ul').slideUp(speed);
        $(this).find(icon).removeClass(active);
    });

    $(btn).parent().find('li:last-child').keydown(function(e){
        if(e.keyCode == 9){
            $(this).parent().trigger('mouseleave');
        }
    });
    $(btn).keydown(function(e){
        if(e.shiftKey){
            $(this).parent().trigger('mouseleave');
        }
    });
});

/* main_slider */
$(document).ready(function(){
    var mSlider = '.main_slider';
    var slide = '.main_slider > ul';
    var slideList = '.main_slider > ul > li';
    var fadeSpeed = 'slow';
    
    var next = '.btn_next';
    var prev = '.btn_prev';
    
    function mFader(index){
        $(slideList).stop().fadeOut(fadeSpeed);
        $(slideList).eq(index).stop().fadeIn(fadeSpeed);
        
        $(slideList).removeClass('on');
        $(slideList).eq(index).addClass('on');
    }
    
    var num = $(slideList).size();
    var lastNum = num - 1;
    var initial = 0;
    
    $(slideList).fadeOut(0);
    mFader(initial);
    
    var autoSlide = setInterval(function(){
        if(initial == lastNum){
            initial = 0;
        }else{
            initial++;
        }
        mFader(initial);
    },5000);
   
    $(next).click(function(e){
        e.preventDefault();
        
        var index = $(slideList).filter('.on').index();
        
        clearInterval(autoSlide);
        
        if(index == lastNum){
            index = 0;
        }else{
            index++;
        }
        
        mFader(index);  
    });
    
    $(prev).click(function(e){
        e.preventDefault();
        
        var index = $(slideList).filter('.on').index();
        
        clearInterval(autoSlide);
        
        if(index == 0){
            index = lastNum;
        }else{
            index--;
        }
        
        mFader(index);  
    });
    
    $(mSlider).mouseenter(function(){
        clearInterval(autoSlide);
    });
    
    $(mSlider).mouseleave(function(){
        var index = $(slideList).filter('.on').index();
        
        autoSlide = setInterval(function(){
        if(index == lastNum){
            index = 0;
        }else{
            index++;
        }
        mFader(index);
        },5000);
    });
        
    });


/* icecream_slider */
$(document).ready(function(){
     var swiper = new Swiper('.icecream .swiper-container', {
      pagination: {
        el: '.icecream .swiper-pagination',
        clickable: true
      },
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      speed: 600
    });
});


/* coffee_banner */
$(document).ready(function(){

    var movingPoint = $('.coffee_bn').offset().top - 500;
    console.log(movingPoint);
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > movingPoint){
            $('.coffee_bn').find('a, p').addClass('active');
            $('.coffee_bn h4').find('span').addClass('active');
        }
        if(scrollTop < movingPoint -300){
            $('.coffee_bn').find('a, p').removeClass('active');
            $('.coffee_bn h4').find('span').removeClass('active');
        }
    });
    

    
});


/* bakery */
$(document).ready(function(){
     var swiper = new Swiper('.bakery .swiper-container', {
      pagination: {
        el: '.bakery .swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: true,
      },
      speed: 800,
      effect: 'coverflow',
      coverflowEffect: {
          depth: 100,
          strech: 50
      },
      grabCursor: true,
              
    });
    

    $('.bakery .text_box').find('a').hover(function(){
        $(this).parents().find('.view_more').addClass('active');
    },function(){
        $(this).parents().find('.view_more').removeClass('active');
    });
    
});


/* shake */
$(document).ready(function(){
    $('.shake_bn').hover(function(){
        $(this).find('figure').addClass('active');
    }, function(){
        $(this).find('figure').removeClass('active');
    });
    
});

/* video_slider */
$(document).ready(function(){
    
    var video01 = document.getElementById('bmd_v01');
    var video02 = document.getElementById('bmd_v02');
    var video03 = document.getElementById('bmd_v03');
    var video04 = document.getElementById('bmd_v04');
    
     var swiper = new Swiper('.video_slider .swiper-container', {
                    slidesPerView: 'auto',
                    spaceBetween: 50,
                    speed: 400,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    centeredSlides: true,
                    pagination: {
                         el: '.video_slider .swiper-pagination',
                         clickable: true,
                    },
                    on:{
                        init: function(){
                        $('.play_btn').stop().fadeIn(0);
                    },
                         slideChange: function(){
                             $('.video_slider .swiper-slide video').trigger('pause');
                             $('.video_slider .swiper-slide video').prop('controls', false);
                             video01.currentTime =0;
                             video02.currentTime =0;
                             video03.currentTime =0;
                             video04.currentTime =0;
                             $('.video_slider button').stop().fadeOut(0);
                             $('.play_btn').stop().fadeIn(300);
                         },
                    }
                     
     });
    
    
    
    $('.video_slider').hover(function(){
        var videoActive = document.querySelector('.swiper-slide-active video');
        if(videoActive.paused){
            $('.play_btn').stop().fadeIn(300);
            $('.pause_btn').stop().fadeOut(0);
        }else{
            $('.play_btn').stop().fadeOut(0);
            $('.pause_btn').stop().fadeIn(300);
        }
        
        
        $('.play_btn').click(function(){
        $('.video_slider .swiper-slide-active video').trigger('play');
        $('.swiper-slide-active video').prop('controls', true);
        $('.play_btn').stop().fadeOut(0);
        $('.pause_btn').stop().fadeIn(0);
    });
    $('.pause_btn').click(function(){
        $('.video_slider .swiper-slide-active video').trigger('pause');
        $('.swiper-slide-active video').prop('controls', false);
        $('.play_btn').stop().fadeIn(0);
        $('.pause_btn').stop().fadeOut(0);
    }); 
    },function(){
        $('.play_btn').stop().fadeOut(0);
        $('.pause_btn').stop().fadeOut(0);
    });
    
});

/* notice, event title hover */
$(document).ready(function(){
    $('.notice_title h2').hover(function(){
        $(this).parent().addClass('active');
    },function(){
        $(this).parent().removeClass('active');
    });

    $('.event_title h2').hover(function(){
        $(this).parent().addClass('active');
    },function(){
        $(this).parent().removeClass('active');
    });
    
});  
    
    







