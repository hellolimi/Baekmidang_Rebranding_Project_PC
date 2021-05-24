//header scroll
$(document).ready(function(){
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
            
    });
    
});


// gnb
$(document).ready(function(){
    var subBg = $('<div class="sub_bg"></div>');
    
    $('header').append(subBg);
    
    var gnb = '.gnb_left, .gnb_right';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var bg = '.sub_bg';
    var speed = '200';
    
    /*$(gnb).hover(function(){
        $(sub + ',' + bg).stop().slideDown(speed); 
    },function(){
        $(sub + ',' + bg).stop().slideUp(speed); 
    });
    */
    $(gnb).mouseenter(function(){
         $(sub + ',' + bg).stop().slideDown(speed);
        
         $(this).parents('header').mouseleave(function(){
            $(sub + ',' + bg).stop().slideUp(speed); 
            $(main).removeClass('active');
        });
    });
    
    $(main).focus(function(){
        $(main).removeClass('active');
        $(sub + ',' + bg).stop().slideDown(speed); 
        $(this).addClass('active');
    });
    
    $(main).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(sub + ',' + bg).stop().slideUp(speed);
                $(main).removeClass('active');
            }
        }
    });
    
    $(sub).last().find('li:last a').keydown(function(e){
        if(e.keyCode == 9 ){
            if(!e.shiftKey){
                $(sub + ',' + bg).stop().slideUp(speed);
                $(main).removeClass('active');
            }
        }
    });
    
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
    
    
});

//family_site
$(document).ready(function(){
    var btn = '.family_site button';
    var icon = '.icon';
    var active = 'active';
    var speed = 'fast';
    
    $(btn).next().find('a').fadeOut(0);
    
    var cnt = 0;
    
    $(btn).click(function(){
        if(cnt == 0){
            $(this).next().find('a').fadeIn(0);
            $(this).next().stop().animate({
                top:0
            },speed);
            
            cnt = 1;
        }else{
            $(this).next().stop().animate({
                top:103
            },speed, function(){
                $(this).next().find('a').fadeOut(0);
            });
            cnt = 0;
        }
        
        $(btn).find(icon).toggleClass(active);
    });
    
    
    $(btn).parent().mouseleave(function(){
        $(this).find('ul').stop().animate({
            top: 103
        },speed,function(){
            $(this).find('a').fadeOut(0);
        });
        cnt = 0;
    });
    
    
    $(btn).next().find('li:last-child a').keydown(function(e){
        if(e.keyCode = 9){
            if(!e.shiftKey){
                $(btn).parent().trigger('mouseleave');
            }
        }
    });
    $(btn).keydown(function(e){
      if(e.keyCode = 9){
          if(e.shiftKey){
              $(btn).parent().trigger('mouseleave');
          }
      }  
    });

      
});


//top_btn
$(document).ready(function(){
    var btn = '.top_btn a';
    var easing = 'easeOutQuart';
    var btnWidth = $(btn).width();
    var minWidth = 1200;
    var stopWidth = minWidth + (btnWidth * 2) + 20;
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var wWidth = $(window).width();
        var stopPoint = $(document).height() - $('footer').outerHeight() - $(window).height() + 150;
        
        if(top < 280 || wWidth < stopWidth){ 
            $(btn).parent().stop().fadeOut(300);
        }else{
            $(btn).parent().stop().fadeIn(300);
        }
        
        if(top > stopPoint){
            $(btn).parent().addClass('active');
        }else{
            $(btn).parent().removeClass('active');
        }
        
    });
    
    $(window).trigger('scroll');
    
    $(window).resize(function(){
        $(window).trigger('scroll');
    });
    
    $(btn).click(function(e){
        e.preventDefault();
        
        $('html, boday').animate({scrollTop:0},900,easing);
    });
    
});


//mobile & pc compatible

$(document).ready(function(){
    var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');
    
    if(document.URL.match('move_pc_screen')){
        $('.go_mobile').fadeIn(0); 
        mobile_keys = null;
    }
            
    for(var i in mobile_keys){
        if(navigator.userAgent.match(mobile_keys[i]) != null){ 
            location.href = 'http://mltbllim.dothome.co.kr/';
            break;
        }
    }
});





















