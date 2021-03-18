;(function(window,document,$,undefined){
// 프로퍼티(속성):속성값(value)   // 프로퍼티에 FUNCTION(){} 함수가 설정되면
// 프로퍼티(속성): function(){}  // 메서드로 전환 init();

    var brando = {
        a:0,     // 정수형 이런 변수 설정도 가능
        b:'on',  // 문자형
        c:true,  // 논리형
        init:        function(){
            brando.headerFn();
        },
        headerFn:    function(){
            // console.log( brando.a , brando.b , brando.c );
            // console.log( this.a , this.b , this.c );
            var that = this;
            console.log( that.a , that.b , that.c );


        },
        section01Fn: function(){
            // 섹션1의 높이는 창(Window) 높이(Height)로 설정
            // 반응형 설정 $(window).scroll();  스크롤 이벤트
            // 반응형 설정 $(window).resize();  크기를 변환시킬때의 넓이와 높이 설정
            // var winH;    변수 할당이 안되어서 undefined됨
            var winH = $(window).height();
                       $('#section01').css({ height:winH });
                console.log( winH );   // 로드시 처음 한번 실행

                $(window).resize(function(){
                    winH = $(window).height();
                           $('#section01').css({ height:winH });
                    console.log( winH );   // 창크기 변경시에만 출력
                });
        },
        section02Fn: function(){

        },
        section03Fn: function(){

        },
        section04Fn: function(){

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
            // 11_16
            // 갤러리 이미지 버튼을 클릭하면
            // 1   클릭한 이미지를 모달창에 띄우기
            // 1-1 클릭한 이미지 파일이름 가져오기 그리고 번호(이미지 인덱스번호)만 추출하기
            // 1-2 페이드 인아웃 효과를 줍니다.
            
            var fileName = null;
            var posNum = null;
            var num = null;

            $('.gallery-img-btn').on({
                click: function(e){
                    e.preventDefault();
                    // 1. 하위 요소 검색 - 속성(Attribute(attr) = Property(prop))을 추출
                    // 2. 속성 내용 중 문자열 위치를 검색 - search('검색문자열'), indexOf('검색문자열')
                    // 3. 해당 위치에서 특정 문자열을 추출 - 문자열.slice(시작,끝) 문자열 추출
                    // 4. Number(); - 내장함수 문자형 숫자를 숫자형으로 변환

                    fileName = $(this).find('img').attr('src');    // 문자열(src) 
                    // fileNum = $(this).children('img').attr('src');
                    
                    // posNum = fileNum.search('.jpg');
                    // posNum = fileName.indexOf('.jpg')-2;    // 포지션 인덱스번호
                    // num = fileName.slice(posNum,posNum+2);
                    posNum = fileName.indexOf('.jpg');   // 22가 시작넘버
                    num = fileName.slice(posNum-2,posNum);

                    
                    fileName = '0123456789';
                    // 앞에서부터 추출
                    num = fileName.slice(0,2);  // 01
                    // num = fileName.slice(0,3);  //012
                    // num = fileName.slice(2,5);  //234
                    // num = fileName.slice(8,9);  //8
                    // num = fileName.slice(9,10);  //9
                    // num = fileName.slice();  //0123456789
                    // num = fileName.slice(8);  //89
                    // num = fileName.slice(9);  //9
                    
                    // // 뒤에서부터 추출
                    // num = fileName.slice(-1);  //9
                    // num = fileName.slice(-2);  //89
                    // num = fileName.slice(0,-1);  //012345678
                    // num = fileName.slice(0);  //0123456789
                    // num = fileName.slice(-2,-1);  //8
                    // num = fileName.slice(-4,-1);  //678
                    // num = fileName.slice(-4);  //6789

                    // num = fileName.slice(-6,-4);   //27 파일번호


                    // console.log( fileName, Number(num) );
                    console.log( fileName, Number(num) );
                    console.log( fileName, parseInt(num) );
                }
            });

        },
        section10Fn: function(){

        },
        section11Fn: function(){

        },
        section12Fn: function(){

        },
        section13Fn: function(){
            var h2Number = $('#section13 h2');  // 780(12.820513) 987(10.131712) 350(28.571429) 166(60.240964)
            var cnt = [0,0,0,0];
            var setId = [null,null,null,null];
            var num = [780,987,350,166];
            var miliSecond = [12.820513,10.131712,28.571429,60.240964];
    
            // var miliSecond = [s/num[0]*1000,s/num[1]*1000,s/num[2]*1000,s/num[3]*1000];


                h2Number.each(function(i){
                    setId[i] = setInterval(function(){
                        cnt[i]++;
                        if(cnt[i]>num[i]){
                            clearInterval(setId[i]);
                        }
                        else{
                            h2Number.eq(i).text(cnt[i]);  // 0.012820513 반복 타이머  cnt++ 780이라는 숫자가 나오면 끝 / 10초간 카운트 한 상태
                        }
                    },miliSecond[i]);    // 1000 = 1초 / 100 = 0.1 / 10 = 0.01 / 1 = 0.001
                });
        },
        section14Fn: function(){

            // 정규 표현식(RegExp)
            // 한글, 영문, 숫자 체크 기본활용
            // 이메일 상자 입력시 한글이 입력되면 바로 삭제를 자동으로 하는 프로그래밍
            // 키보드로 글자를 입력 시 키가 다운(keydown)되었다가 올라올때(keyup)

            $('#mail').on({
                keyup: function(){

                    // var 변수 = /정규표현식 한글 자모받침글자 or (|) 파이프 /;
                    // var 변수 = / [조건] /;
                    // test() 유효성 검사 메서드
                    var hangul = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;  // 한글체크 (한글의 범위 표시)
                    if( hangul.test($(this).val())){
                        $(this).val('');
                        alert('한글은 입력이 안됩니다.');
                    }
                }
            });

            $('#irum').on({
                keyup: function(){
                    var english = /[A-Za-z]/;  // 영문체크
                    if(english.test($(this).val())){
                        $(this).val('');
                        alert('영문은 입력이 안됩니다.');
                    }
                }
            });

            $('#message').on({
                keyup: function(){
                    var number = /[A-Za-z0-9]/;  // 영문, 숫자체크
                    if(number.test($(this).val())){
                        $(this).val('');
                        alert('영문과 숫자는 입력이 안됩니다.');
                    }
                }
            });

            

            // 유효성 검사
            // 정규 표현식(RegExp) 이메일 체크
            // nizi_aki@naver.com
            // sera-486@hanmail.net
            // aych486@yahoo.co.kr
            
            // 조건 첫번째 맨 앞글자(첫 글자)는 반드시 영문/숫자[a-zA-Z0-9]로 시작(^)하고
            // ※ [^a-zA-Z] 영문이 아닌 것 (부정문) 대괄호 안에는 부정 = ~ 아닌것
            // ※ ^[a-zA-Z] 첫 글자가 영문으로 시작하는 것 대괄호 밖에는 첫 글자의 의미

            // 조건 마지막은 반드시 영문[a-zA-Z] 2글자에서 3글자{2,3}로 끝($)남.  예] 2글자{2}/3글자{3}
            // ※ 특수문자  * : 0 이상 반복
            // ※ 특수문자  + : 1 이상 반복
            // ※ 특수문자  ? : 0 또는 1개의 문자 매칭
            // ※ 특수문자  . : 정확히 1개 문자 매칭
            //             \w  : 단어의 경계 (무조건 1글자 이상)
            // ※ 종결어미  /i  : 대소문자 구분 안함
            // ※ 종결어미  /g  : 전체(전역대칭) 글로벌

            // nizi_aki@yahoo               .co          .kr
            //                    sera-486 nizi_aki aych.486        @yahoo 필요조건   .co            .kr/.com/.net 필요조건 / 대소문자 무시
            // var regExpMail = /^[a-zA-Z0-9] ([-_.]?[a-zA-Z0-9])*  @[a-zA-Z0-9]   ([.]?[a-zA-Z])*  .[a-zA-Z]{2,3}$/ i;
            
            /*
            /^[a-zA-Z0-9]
            
            ([-_.]?[a-zA-Z0-9])*
            
            @[a-zA-Z0-9]
            
            ([.]?[a-zA-Z])*
            
            .[a-zA-Z]{2,3}$/i;
            */
           
            // 이메일 유효성검사
            var regExpMail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            
            consol.log('유효성검사',regExpMail.test( $('#mail').val()));

            if(regExpMail.test($('#mail').val())){
                alert('이메일 유효성 검사 통과');
                $('#mail').removeClass('addError');
            }
            else{
                alert('이메일 유효성 검사 오류 발생');
                $('#mail').addClass('addError');
            }
            
            // 이름 유효성검사
            // g : 전체(전역대칭)
            var regExpIrum = /[^a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;  // 영문과한글이 아니면 입력 오류
            
            if(regExpIrum.test($('#irum').val()) === false ){
                console.log('이름 유효성검사',regExpIrum.test( $('#mail').val() ) );
                alert('이름 유효성 검사 통과');
                $('#irum').removeClass('addError');
            }
            else{  // true
                console.log('이름 유효성검사',regExpIrum.test( $('#mail').val() ) );
                alert('이름 유효성 검사 오류 발생');
                $('#irum').addClass('addError');
                return false;  // 전송버튼 클릭을 취소
            }



                                            // 이름 유효성검사
                                // g : 전체(전역대칭)
                                // 영문과한글이 아니면 입력 오류
                                if( regExpIrum.test($('#irum').val()) === false ){
                                    console.log('이름 유효성검사', regExpIrum.test( $('#irum').val() ) );
                                    alert('이름 유효성 검사 통과');
                                    // $('#irum').removeClass('addError');
                                }
                                else{  // true  한글 영문 이외의 글자 특수문자...
                                    console.log('이름 유효성검사',regExpIrum.test( $('#irum').val() ) );
                                    alert('이름 유효성 검사 오류 발생');
                                    // $('#irum').addClass('addError');
                                    return false;  // 전송버튼 클릭을 취소
                                }


                                // 이메일 유효성검사
                                if(regExpMail.test($('#mail').val())){
                                    console.log('이메일 유효성검사',regExpMail.test($('#mail').val()));
                                    alert('이메일 유효성 검사 통과');
                                    $('#mail').removeClass('addError');
                                }
                                else{
                                    alert('이메일 유효성 검사 오류 발생');
                                    $('#mail').addClass('addError');
                                    return false;
                                }
        }
    };

    brando.init();



})(window,document,jQuery);