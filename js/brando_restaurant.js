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
                that.sec09GalleryFn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
                that.scrollEventFn();
                that.scrollEventArrayFn();
        },
        headerFn:    function(){
            var smoothBtn = $('.smooth-btn');
            var htmlBody = $('html,body');
            var mobileMenu = $('#header .mobile-menu');
            var mobileBtn = $('#header .mobile-btn');
            var win = $(window);
            var header = $('#header');
            var goTop = $('.goTop');

            var winW = win.width();
            var url = null;

                smoothBtn.on({
                    click: function(e){
                        var that = $(this);
                        e.preventDefault();
                        url = that.attr('href');
                        htmlBody.stop().animate({ scrollTop: $(url).offset().top },600);
                        mobileMenu.hide();
                        mobileBtn.removeClass('addClose');
                    }
                });


                win.scroll(function(){
                    if( win.scrollTop() >= 30 ){
                        header.addClass('addMobile');
                        goTop.addClass(' addGotop');
                    }
                    else{
                        header.removeClass('addMobile');
                        goTop.removeClass(' addGotop');
                    }
                });


                win.resize(function(){
                    winW = win.width();
                    if( winW>990 ){
                        mobileBtn.removeClass('addClose');
                        mobileMenu.stop().slideUp(0);

                    }
                });

                mobileBtn.on({
                    click: function(e){
                        var that = $(this);
                        e.preventDefault();
                        that.toggleClass('addClose');
                        mobileMenu.stop().slideToggle(300);
                    }
                });

        },
        section01Fn: function(){
            var win = $(window);
            var section01 = $('#section01');
            var section02 = $("#section02");
            var hungry = $('#section01 .hungry');
            var arrowDownBtn = $("#section01 .arrow-down-btn");
            var htmlBody = $("html,body");
            var slide = $('#section01 .slide');

            var cnt = 0;
            var n=slide.length-1;
            var winH = 969;
            var imgH = hungry.height();
            var imgT = (winH-imgH)/2;
 
                setTimeout(resizeFn,100);
                function resizeFn(){
                    winH = win.height();
                           section01.css({ height:winH });
                           imgH = hungry.height();
                           imgT = (winH-imgH)/2;
                           hungry.css({ top:imgT });
                }
                
                win.resize(function(){
                    resizeFn();
                });

                arrowDownBtn.on({
                    click: function(){
                        htmlBody.stop().animate({ scrollTop: section02.offset().top },1000);
                    }
                });

                function mainNextSlideFn(){
                    slide.css({zIndex:1});
                    slide.eq(cnt==0?n:cnt-1).css({zIndex:2});
                    slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).stop().animate({opacity:1},800);
                }

                function mainPrevSlideFn(){
                    slide.css({zIndex:1}).stop().animate({opacity:1},0);
                    slide.eq(cnt).css({zIndex:2});
                    slide.eq(cnt==n?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).stop().animate({opacity:0},800);
                }

                function nextCountFn(){
                    cnt++;
                    if(cnt>n){cnt=0;}
                    mainNextSlideFn();
                }

                function prevCountFn(){
                    cnt--; 
                    if(cnt<0){cnt=n;}
                    mainPrevSlideFn();
                }

                setInterval(nextCountFn,3000);


                section01.swipe({
                    swipeLeft: function(){
                        if( !slide.is(':animated') ){
                            nextCountFn(); 
                        }
                    },
                    swipeRight: function(){
                        if( !slide.is(':animated') ){
                            prevCountFn();
                        }
                    }

                });

        },
        section234Fn: function(){
            var win = $(window);
            var section234 = $('.section234');
            var contentWrap = $('.section234 .content-wrap');
            var textWrap = $('.section234 .text-wrap');
            var textWrapH3 = $('.section234 .text-wrap h3'); 
            var textWrapH4 = $('.section234 .text-wrap h4');
            var textWrapP = $('.section234 .text-wrap p');
            var sec0204contentWrap = $('#section02 .content-wrap, #section04 .content-wrap');
            var sec03contentWrap = $('#section03 .content-wrap');


            var winH = win.height();
            var sectionH = winH;
            var boxW = contentWrap.width();
            var boxH = boxW * 1.222222222;
            var boxTop = (winH - boxH)/2;
            var winW = win.width();  
            var x = (winW-boxW)/2;
            
            var rateH3 = 0.096551724;
            var rateH4 = 0.037931034;
            var rateP  = 0.048275862;
            var textW = textWrap.width();

            var fontSizeH3 = rateH3 * textW;
            var fontSizeH4 = rateH4 * textW;
            var fontSizeP = rateP  * textW;


                setTimeout(resizeFn,100);
                
                function resizeFn(){
                    winH = win.height(); 
                    sectionH = winH;
                    boxW = contentWrap.width();
                    boxH = boxW * 1.222222222;
                    winW = win.width();  
                    x = (winW-boxW)/2;
                    
                    if( winH < boxH + 60 ){
                        sectionH = boxH + 60;
                        boxTop = 30; 
                    }
                    else{
                        sectionH = winH;
                        boxTop = (winH - boxH)/2;  
                    }

                    // 폰트 사이즈 반응형
                    textW = textWrap.width();
                    fontSizeH3 = rateH3 * textW;
                    fontSizeH4 = rateH4 * textW;
                    fontSizeP = rateP  * textW;

                    textWrapH3.css({fontSize:fontSizeH3});
                    textWrapH4.css({fontSize:fontSizeH4});
                    textWrapP.css({fontSize:fontSizeP});

                    // 박스 탑, 박스 높이
                    contentWrap.css({ top:boxTop, height:boxH });

                    // 섹션의 높이
                    section234.css({ height:sectionH }); 

                    if( winW <= 1170 ){
                        sec0204contentWrap.stop().animate({ right:x-15 },300); 
                        sec03contentWrap.stop().animate({ left:x-15 },300); 
                    }
                    else{
                        sec0204contentWrap.stop().animate({ right:0 },100); 
                        sec03contentWrap.stop().animate({ left:0 },100); 
                    }
                }

                win.resize(function(){
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
            var win = $(window);
            var htmlRoot = $('html');
            var imgWrap = $('.modal .img-wrap');
            var galleryImgBtn = $('#section09 .gallery-img-btn');
            var modal = $('.modal');
            var imgWrapImg = $('.modal .img-wrap img');
            var closeBtnImgWrap = $('.modal .close-btn, .modal .img-wrap');
            var arrowRightBtnImgBtn = $('.modal .arrow-right-btn, .modal .img-btn');
            var arrowLeftBtn = $('.modal .arrow-left-btn');


            var fileName = null;
            var endNum  = null;
            var fileNum  = null;
            var winH = 0;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    winH = win.innerHeight();
                    imgWrap.css({lineHeight:winH+'px'});
                }

                win.resize(function(){
                    resizeFn();
                });

            // 모달창 구현
            galleryImgBtn.on({
                click: function(e){
                    var that = $(this);
                    e.preventDefault();

                    htmlRoot.addClass('addScroll');
                    
                    fileName = that.find('img').attr('src');
                    endNum = fileName.indexOf('.jpg');
                    fileNum = Number(fileName.slice(endNum-2,endNum));

                    modalSlideFn();
                }
            });

            function modalSlideFn(){
                modal.stop().fadeIn(300);
                imgWrapImg.stop().fadeOut(0).attr('src','./img/restaurant-img' + fileNum + '.jpg').fadeIn(1000);
            }

            // 모달창 닫기 버튼
            closeBtnImgWrap.on({
                click: function(){
                    modal.stop().fadeOut(300);
                    htmlRoot.removeClass('addScroll');
                }
            });

            // 다음 버튼
            arrowRightBtnImgBtn.on({
                click: function(e){
                    e.stopPropagation();
                    fileNum++;
                    if(fileNum>32){
                        fileNum=25;
                    }
                    modalSlideFn();
                }
            });
            // 이전 버튼
            arrowLeftBtn.on({
                click: function(){
                    fileNum--;
                    if(fileNum<25){
                        fileNum=32;
                    }
                    modalSlideFn();
                }
            });
        },
        sec09GalleryFn: function(){
            var win = $(window);
            var gallery = $('#section09 .gallery');
            var galleryLi = $('#section09 .gallery li');
            var galleryBtn = $('.gallery-btn');


            var hRate = 600/800;
            var winW = win.innerWidth();
            var cols = 4;
            var n = galleryLi.length;
            var rows = Math.ceil(n/cols);
            var imgW = winW/cols;
            var imgH = imgW*hRate;

            var hide = [];
            var show = [0,1,2,3,4,5,6,7];

                setTimeout(galleryFn,100);

                function galleryFn(){

                    winW = win.innerWidth();
                    
                    if( winW > 1200 ){
                        cols = 4;
                    }
                    else if( winW <= 1200 && winW > 980 ){
                        cols = 3;
                    }
                    else if( winW <= 980 && winW > 760 ){
                        cols = 2;
                    }
                    else if( winW <= 760 && winW >= 0 ){
                        cols = 1;
                    }

                    n = galleryLi.length;
                    rows = Math.ceil(n/cols);

                    imgW = winW/cols;
                    imgH = imgW*hRate;

                        gallery.removeClass('addZoom');
                        galleryLi.removeClass('addZoom2');

                        gallery.css({ height:imgH*rows });

                    for(var i=0;i<hide.length;i++){
                        galleryLi.eq(hide[i]).hide();
                    }

                    var cnt=-1;
                    
                    for(var i=0;i<rows;i++){
                        for(var j=0;j<cols;j++){
                            cnt++;
                            if(cnt>show.length)
                            break;
                            galleryLi.eq(show[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300, function(){
                                galleryLi.addClass('addZoom2');
                            });
                        }
                    }
                    gallery.addClass('addZoom');
                }

                win.resize(function(){
                    galleryFn();
                });

                galleryBtn.each(function(index){
                    var that = $(this);
                    that.on({
                        click: function(e){
                            e.preventDefault();
                            galleryBtn.removeClass('addNav');
                            that.addClass('addNav');
 
                            switch(index){
                                case 0:
                                    hide=[];
                                    show=[0,1,2,3,4,5,6,7];
                                    break;
                                case 1:
                                    hide=[0,2];
                                    show=[1,3,4,5,6,7];
                                    break;
                                case 2:
                                    hide=[1,3,4,5];
                                    show=[0,2,6,7];
                                    break;
                                case 3:
                                    hide=[0,2,5];
                                    show=[1,3,4,6,7];
                                    break;
                                default:
                                    hide=[0,1,3,6];
                                    show=[2,4,5,7];
                            }
                            galleryFn();
                        }
                    });
                });


        },
        section10Fn: function(){
            var win = $(window);
            var winW = win.innerWidth();
            var slideW = 975;
            var cnt=0;
            var slide = $('#section10 .slide-wrap .slide');
            var slideWrap = $('#section10 .slide-wrap');
            var nextBtn = $('#section10 .next-btn');
            var prevBtn = $('#section10 .prev-btn');

            setTimeout(resizeFn,100);

            function resizeFn(){
                winW = win.innerWidth();
                if(winW > 975){
                    slideW = 975;
                }
                else{
                    slideW = winW;
                }

                slide.css({width:slideW});
                slideWrap.css({width:slideW*3});
                slideWrap.stop().animate({left:(-slideW*cnt)},300);

            }

            win.resize(function(){
                resizeFn();
            });

            function slideFn(){

                slideWrap.stop().animate({ left:(-slideW*cnt) },1000, 'easeOutExpo');
            }

            function nextCountFn(){
                cnt++;
                if(cnt>2)
                cnt=2;
                slideFn();
            }
            function prevCountFn(){
                cnt--;
                if(cnt<0)
                cnt=0;
                slideFn();
            }

            nextBtn.on({
                click: function(){
                    nextCountFn();
                }
            });
            prevBtn.on({
                click: function(){
                    prevCountFn();
                }
            });

            slideWrap.swipe({
                swipeLeft: function(){
                    nextCountFn();
                },
                swipeRight: function(){
                    prevCountFn();
                }
            });
        },
        section11Fn: function(){
            var win = $(window);
            var blog = $('.blog');  // 4개 배열처리 메서드 each() 활용
            var blogList = $('.blog li');  // 첫번째의 li
            var blogListImgH = blogList.eq(0).innerHeight();  // 첫번째의 li의 높이
            var fontRateH5 = 0.039711191;  // 폰트 비율
            var fontRateP = 0.072202166;  // 폰트 비율
            var blogListImgW = blogList.eq(0).innerWidth();  // 첫번째의 li의 너비
            var fontSizeH5 = fontRateH5 * blogListImgW;  // 폰트사이즈 반응형 계산
            var fontSizeP = fontRateP * blogListImgW;   // 폰트사이즈 반응형 계산


            setTimeout(resizeFn,100);  // 로딩시

            function resizeFn(){
                blogListImgH = blogList.eq(0).innerHeight();
                blogListImgW = blogList.eq(0).innerWidth();
                fontSizeH5 = fontRateH5 * blogListImgW;
                fontSizeP = fontRateP * blogListImgW;

                fontSizeH5>11 ? fontSizeH5=11:fontSizeH5;
                fontSizeH5<8 ? fontSizeH5=8:fontSizeH5;
                
                fontSizeP>18 ? fontSizeP=18:fontSizeP;
                fontSizeP<15 ? fontSizeP=15:fontSizeP;



                blog.each(function(idx){
                    blog.eq(idx).children('li').eq(1).css({height:blogListImgH});  // 배열처리
                    blog.eq(idx).find('h5').css({fontSize:fontSizeH5});
                    blog.eq(idx).find('p').css({fontSize:fontSizeP});
                });
            }


            win.resize(function(){
                resizeFn();
            });

        },
        section12Fn: function(){
            var win = $(window);
            var h3 = $('#section12 h3');
            var h2 = $('#section12 h2');
            var titleWrap = $('#section12 .title-wrap');

            var containerW = titleWrap.innerWidth();
            var fontSizeH3 = containerW * 0.01754386;
            var fontSizeH2 = containerW * 0.035087719;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    containerW = titleWrap.innerWidth();
                    fontSizeH3 = containerW * 0.01754386;
                    fontSizeH2 = containerW * 0.035087719;

                    if(fontSizeH3<13){fontSizeH3=13;}
                    if(fontSizeH2<25){fontSizeH2=25;}

                    h3.css({fontSize:fontSizeH3});
                    h2.css({fontSize:fontSizeH2});
                }

                win.resize(function(){
                    resizeFn();
                });

        },
        section13Fn: function(){
            var h2Num = $('#section13 h2');
            var cnt = [0,0,0,0];
            var setId = [null];
            var num = [780,987,350,166];
            var s= 10;
            var mSecond = [];
            var win =  $(window);
            var sec12Top = $('#section12').offset().top;
            var t = 0;

            for(var i=0; i<num.length; i++){
                mSecond[i] = s/num[i]*1000;
            }

            win.scroll(function(){
                if( win.scrollTop() > sec12Top ){
                    if(t==0){
                        t=1;
                        countFn();
                    }
                }
                else{
                    cnt = [0,0,0,0];
                    t=0;
                }
            });

            function countFn(){
                h2Num.each(function(i){
                    setId = setInterval(function(){
                        cnt[i]++;
                        if(cnt[0]>num[0]){
                            clearInterval(setId);

                            h2Num.eq(0).text(num[0]);
                            h2Num.eq(1).text(num[1]);
                            h2Num.eq(2).text(num[2]);
                            h2Num.eq(3).text(num[3]);

                        }
                        else{
                            h2Num.eq(i).text(cnt[i]);
                        }
                    },mSecond[i]);
                });

            }
        },
        section14Fn: function(){
            var setId=0;

            // $('#mail').on({
            //     keyup:function(){
            //         var han = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            //         if(han.test($(this).val())){
            //             $(this).val('');
            //             alert('한글은 입력 불가!');
            //         }
            //     }
            // });

            // $('#irum').on({
            //     keyup: function(){
            //         var english = /[A-Za-z]/;
            //         if(english.test($(this).val())){
            //             $(this).val('');
            //         }
            //     }
            // });

            $('#irum').on({
                focus: function(){
                    $('.success-message').removeClass('addSuccess');
                }
            });

            $('#submit').on({
                click: function(e){
                    e.preventDefault();

                    $('.error-message').removeClass('addError');
                    $('.success-message').removeClass('addSuccess');

                    var irumVal = $('#irum').val();
                    var mailVal = $('#mail').val();
                    var interestedVal = $('#interested').val();
                    var messageVal = $('#message').val();
                    var cnt=0;
                    
                    $('.ajax-loader').addClass('addAjax');

                    setId = setInterval(function(){
                        cnt++;
                        if(cnt>1){
                            clearInterval(setId);
                            $('.ajax-loader').removeClass('addAjax');
                            formFn();
                        }
                    },1000);

                        function formFn(){

                            var regExpIrum = /[^a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
                            if(regExpIrum.test($('#irum').val())){
                                alert('이름 유효성 검사 오류');
                                $('#irum').addClass('addError');
                                return false;
                            }
                            else{
                                alert('이름 유효성 검사 통과');
                                $('#irum').removeClass('addError');
                            }
                            
                            var regExpEmail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                            if(regExpEmail.test($('#mail').val())){
                                alert('이메일 유효성 검사 통과');
                                $('#mail').removeClass('addError');
                            }
                            else{
                                alert('이메일 유효성 검사 오류');
                                $('#mail').addClass('addError');
                                return false;
                            }

                            if( irumVal=='' || mailVal=='' || messageVal=='' ){
                                
                                // if(irumVal==''){
                                //     $('#irum').addClass('addError');
                                // }
                                // else{
                                //     $('#irum').removeClass('addError');
                                // }

                                // if(mailVal==''){
                                //     $('#mail').addClass('addError');
                                // }
                                // else{
                                //     $('#mail').removeClass('addError');
                                // }

                                if(interestedVal==''){
                                    $('#interested').addClass('addError');
                                }
                                else{
                                    $('#interested').removeClass('addError');
                                }

                                if(messageVal==''){
                                    $('#message').addClass('addError');
                                }
                                else{
                                    $('#message').removeClass('addError');
                                }

                                $('.error-message').addClass('addError');
                                return false;
                            }
                            else{

                                $('#irum').removeClass('addError');
                                $('#mail').removeClass('addError');
                                $('#message').removeClass('addError');
                                $('.error-message').removeClass('addError');

                                $.ajax({
                                    url: './response.php',
                                    type: 'post',
                                    data:{
                                        irum: irumVal,
                                        mail: mailVal,
                                        interested: interestedVal,
                                        message: messageVal
                                    },
                                    success: function(data){
                                        console.log(data);
                                        $('.ajax-response').html(data);
                                        $('.success-message').addClass('addSuccess');

                                        $('#irum').val('');
                                        $('#mail').val('');
                                        $('#interested option').eq(0).prop('selected',true);
                                        $('#message').val('');
                                    },
                                    error: function(){
                                        console.log('AJAX 오류!!!');
                                    }
                                });
                            }
                        }
                }
            });
        },
        scrollEventFn:  function(){
            // var sec02Top = $('#section02').offset().top-600;
            // var sec03Top = $('#section03').offset().top-600;
            // var sec04Top = $('#section04').offset().top-600;
            var sec05Top = $('#section05').offset().top;
            // var sec06Top = $('#section06').offset().top-600;
            // var sec07Top = $('#section07').offset().top-600;
            var sec08Top = $('#section07').offset().top;
            var sec09Top = $('#section08').offset().top-300;
            var sec10Top = $('#section09').offset().top-600;
            var sec11Top = $('#section09').offset().top;
            var sec12Top = $('#section10').offset().top-600;
            var sec13Top = $('#section11').offset().top-600;
            var sec14Top = $('#section11').offset().top;
            var win = $(window);

                win.scroll(function(){
                    // // 섹션2 페럴럭스
                    // if( win.scrollTop() > sec02Top ){
                    //     $('#section02').addClass('addEvent');
                    // }
                    // else{
                    //     $('#section02').removeClass('addEvent');
                    // }
                    // // 섹션3 페럴럭스
                    // if( win.scrollTop() > sec03Top ){
                    //     $('#section03').addClass('addEvent');
                    // }
                    // else{
                    //     $('#section03').removeClass('addEvent');
                    // }
                    // // 섹션4 페럴럭스
                    // if( win.scrollTop() > sec04Top ){
                    //     $('#section04').addClass('addEvent');
                    // }
                    // else{
                    //     $('#section04').removeClass('addEvent');
                    // }
                    // // 섹션5 페럴럭스
                    // if( win.scrollTop() > sec05Top ){
                    //     $('#section05').addClass('addEvent');
                    // }
                    // else{
                    //     $('#section05').removeClass('addEvent');
                    // }
                    // 섹션6 페럴럭스
                    if( win.scrollTop() > sec05Top ){
                        $('#section06').addClass('addEvent');
                    }
                    else{
                        $('#section06').removeClass('addEvent');
                    }
                    // // 섹션7 페럴럭스
                    // if( win.scrollTop() > sec07Top ){
                    //     $('#section07').addClass('addEvent');
                    // }
                    // else{
                    //     $('#section07').removeClass('addEvent');
                    // }
                    // 섹션8 페럴럭스
                    if( win.scrollTop() > sec08Top ){
                        $('#section08').addClass('addEvent');
                    }
                    else{
                        $('#section08').removeClass('addEvent');
                    }
                    // // 섹션9 페럴럭스
                    if( win.scrollTop() > sec09Top ){
                        $('#section09').addClass('addEvent');
                    }
                    else{
                        $('#section09').removeClass('addEvent');
                    }
                    // 섹션10 페럴럭스
                    if( win.scrollTop() > sec10Top ){
                        $('#section10').addClass('addEvent');
                    }
                    else{
                        $('#section10').removeClass('addEvent');
                    }
                    // 섹션11 페럴럭스
                    if( win.scrollTop() > sec11Top ){
                        $('#section11').addClass('addEvent');
                    }
                    else{
                        $('#section11').removeClass('addEvent');
                    }
                    // 섹션12 페럴럭스
                    if( win.scrollTop() > sec12Top ){
                        $('#section12').addClass('addEvent');
                    }
                    else{
                        $('#section12').removeClass('addEvent');
                    }
                    // 섹션13 페럴럭스
                    if( win.scrollTop() > sec13Top ){
                        $('#section13').addClass('addEvent');
                    }
                    else{
                        $('#section13').removeClass('addEvent');
                    }
                    // 섹션14 페럴럭스
                    if( win.scrollTop() > sec14Top ){
                        $('#section14').addClass('addEvent');
                    }
                    else{
                        $('#section14').removeClass('addEvent');
                    }
                });
        },
        scrollEventArrayFn: function(){
            var secTop = [];
            var win = $(window);
            var section = $('.section');
            var n = section.length;

                for(var i=0;i<=n-1;i++){
                    secTop[i] = section.eq(i).offset().top-600;
                }

                win.scroll(function(){
                    for(var i=0;i<=n-1;i++){
                        if( win.scrollTop() > secTop[i] ){
                            section.eq(i).addClass('addEvent');
                        }
                        else{
                            section.eq(i).removeClass('addEvent');
                        }
                    }
                });
        }
    };

    brando.init();



})(window,document,jQuery);