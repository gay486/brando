;(function(window,document,$,undefined){

    var brando = {
        init:        function(){
            var that = this;

                that.headerFn();
                that.section01Fn();
                that.section234Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
        },
        headerFn:    function(){
            var winW = $(window).width();
            var url = null;
                // Smooth Scrolling Event : <a href = #해시태그 가져와서 부드럽게 해당 섹션으로 이동
                $('.smooth-btn').on({
                    click: function(e){
                        e.preventDefault();
                        url = $(this).attr('href');
                        $('html,body').stop().animate({ scrollTop: $(url).offset().top },600);  //해당하는 위치에 가져와서 실행
                        $('.mobile-menu').hide();  // 이동하자마자 사라짐
                        $('.mobile-btn').removeClass('addClose');    // X버튼도 사라지도록
                    }
                });


                $(window).scroll(function(){
                    if( $(window).scrollTop() >= 30 ){
                        $('#header').addClass('addMobile');
                        $('.goTop').addClass(' addGotop');
                    }
                    else{
                        $('#header').removeClass('addMobile');
                        $('.goTop').removeClass(' addGotop');
                    }
                });


                $(window).resize(function(){
                    winW = $(window).width();
                    if( winW>990 ){
                        $('.mobile-btn').removeClass('addClose');
                        $('.mobile-menu').stop().slideUp(0);

                    }
                });

                $('.mobile-btn').on({
                    click: function(e){
                        e.preventDefault();
                        $(this).toggleClass('addClose');
                        $('.mobile-menu').stop().slideToggle(300);
                    }
                });

        },
        section01Fn: function(){
            var cnt = 0;
            var winH = 969;
            var imgH = $('.hungry').height();
            var imgT = (winH-imgH)/2;
 
                setTimeout(resizeFn,100);
                function resizeFn(){
                    winH = $(window).height();
                           $('#section01').css({ height:winH });
                           imgH = $('.hungry').height();
                           imgT = (winH-imgH)/2;
                           $('.hungry').css({ top:imgT });
                }
                
                $(window).resize(function(){
                    resizeFn();
                });

                // Smooth Scrolling Event
                $(".arrow-down-btn").on({
                    click: function(){
                        $("html,body").stop().animate({ scrollTop: $("#section02").offset().top },1000);
                    }
                });


                function mainNextSlideFn(){
                    $('.slide').css({zIndex:1});
                    $('.slide').eq(cnt).css({zIndex:2});
                    $('.slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).stop().animate({opacity:1},1500);
                }

                function countNextFn(){
                    cnt++;
                    if(cnt>2){cnt=0}
                    mainNextSlideFn();
                }
                setInterval(countNextFn,100);

        },
        section234Fn: function(){

            var winH = $(window).height();
            var sectionH = winH;
            var boxW = $('.content-wrap').width();
            var boxH = boxW * 1.222222222;
            var boxTop = (winH - boxH)/2;
            var winW = $(window).width();  
            var x = (winW-boxW)/2;
            
            var rateH3 = 0.096551724;
            var rateH4 = 0.037931034;
            var rateP  = 0.048275862;
            var textW = $('.text-wrap').width();
            
            // var fontSizeH3 = 비율 * 텍스트박스 내부 너비
            var fontSizeH3 = rateH3 * textW;
            var fontSizeH4 = rateH4 * textW;
            var fontSizeP = rateP  * textW;


                setTimeout(resizeFn,100);
                
                function resizeFn(){
                    // 창높이 기준으로 섹션높이 변경
                    winH = $(window).height(); 
                    sectionH = winH;
                    // 박스너비에 따라 비율로 박스높이 변경
                    boxW = $('.content-wrap').width();
                    boxH = boxW * 1.222222222;
                    // 창너비에 따라서 X(left right) 위치 가운데 정렬 계산
                    winW = $(window).width();  
                    x = (winW-boxW)/2;
                    
                    if( winH < boxH + 60 ){    // 박스높이에 60을 주고 510으로 보고
                        sectionH = boxH + 60;  // 위 아래에 30씩 주어서 여백을 주기 (높이 여백 필요시)
                        boxTop = 30; 
                    }
                    else{
                        sectionH = winH;
                        boxTop = (winH - boxH)/2;  
                    }

                    // 폰트 사이즈 반응형
                    textW = $('.text-wrap').width();
                    fontSizeH3 = rateH3 * textW;
                    fontSizeH4 = rateH4 * textW;
                    fontSizeP = rateP  * textW;

                    $('.text-wrap h3').css({fontSize:fontSizeH3});
                    $('.text-wrap h4').css({fontSize:fontSizeH4});
                    $('.text-wrap p').css({fontSize:fontSizeP});

                    // 박스 탑, 박스 높이
                    $('.content-wrap').css({ top:boxTop, height:boxH });

                    // 섹션의 높이
                    $('.section234').css({ height:sectionH }); 

                    if( winW <= 1170 ){
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:x-15 },300); 
                        $('#section03 .content-wrap').stop().animate({ left:x-15 },300); 
                    }
                    else{
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:0 },100); 
                        $('#section03 .content-wrap').stop().animate({ left:0 },100); 
                    }
                }

                $(window).resize(function(){
                    resizeFn();
                });
        },
        section05Fn: function(){

        },
        section06Fn: function(){

        },
        section07Fn: function(){

        },
        section08Fn: function(){

        },
        section09Fn: function(){

        },
        section10Fn: function(){

        },
        section11Fn: function(){

        },
        section12Fn: function(){

        },
        section13Fn: function(){

        },
        section14Fn: function(){

        }
    };

    brando.init();



})(window,document,jQuery);