$(function(){

  // header
  $(window).scroll(function(){ //윈도우 스크롤
    curr = $(this).scrollTop();//내현재스크롤
    if(curr >= 20){ //만약에 내 curr가 20보다 크거나 같으면
        $('.header').addClass('on')
    }else{
        $('.header').removeClass('on')
    }
})

// 헤더 메뉴나오게
$('.nav').click(function(e){
  e.preventDefault();
  // .header .menu-area .sub
  headerH = $('.header .group-flex').outerHeight();
  targetH = $(this).siblings('.sub').outerHeight();
  totalH = headerH+targetH;


  
  if($(this).hasClass('on')){

    $('.nav').removeClass('on');
    $('.header').removeClass('on');
    $('.header-inner').css('height',headerH);
    $('.header .sub').removeClass('on');

  }else{

    $('.nav').removeClass('on');
    $('.header .sub').removeClass('on');
    $(this).addClass('on').siblings('.sub').addClass('on');
    $('.header').addClass('on');
    $('.header-inner').css('height',totalH);

  }
})



// sc-visual 텍스트 안보였다가 보이게 하기,밑에서 위로 올라오는 효과
gsap.set('.sc-visual .text-wrap .text span',{
  yPercent:100
})

introShow = gsap.timeline({})

introShow
.to('.sc-visual .text-wrap .text span',{
  yPercent:0,
  stagger:0.1 //순차적으로 실행
})
.from('.sc-visual .img-box',{
  yPercent:20,
  opacity: 0
})



//sc-visual 순차모션
introMotion = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-visual",
    start:"0% 0%",
    end:"100% 0%",
    //markers:true,
    scrub:0.5,
  },

})

introMotion
.addLabel('a')
.to('.circle-bg',{ 'border-radius':'0', width:'100%', height:'100%'},'a')
.to('.sc-visual .text-wrap:nth-child(2) .text:nth-child(1)',{xPercent:20},'a')
.to('.sc-visual .text-wrap:nth-child(2) .text:nth-child(2)',{xPercent:-50},'a')
.to('.sc-visual .text-wrap:nth-child(4) .text',{xPercent:-150 },'a')

.to('.sc-visual .img-box.img1 .img',{rotation:-20},'a')
.to('.sc-visual .img-box.img2 .img',{rotation:20},'a')
.to('.sc-visual .img-box.img3 .img',{rotation:20},'a')

gsap.to('.sc-visual .img-box img',3,{ //3은 속도
  rotation:-20,
  repeat:-1, //반복,음수로 쓰면 무한반복
  yoyo:true, //자연스럽게 움직임
  ease:'none', //일정한 모션으로 줄려면 ease:'none'으로 뺌

})




//video 
gsap.to('.sc-intro .video-wrap',{
  scrollTrigger:{
    trigger:".sc-intro",
    start:"0% 50%",
    end:"100% 0%",
    //markers:true,
    scrub:0.5,
  },

  'border-radius':'0',
  scale:1
})


// sc-content 이미지가 자연스럽게 나타나는 효과
$('.sc-content .flex-area').each(function(i,el){
  gsap.from($(this),{
    scrollTrigger:{
      trigger:el,
      start:"0% 80%",
      end:"100% 0%",
      //markers:true,
    },
    opacity:0
  })
})


//sc-slogan 이미지 움직임
introMotion
.addLabel('a')

.to('.sc-slogan .img-box.img1',{rotation:-20},'a')
.to('.sc-slogan .img-box.img2',{rotation:20},'a')

gsap.to('.sc-slogan .img-box img',3,{
  rotation:-20,
  repeat:-1,
  yoyo:true,
  ease:'none',

})


//sc-slogan Swiper
contentSlide = new Swiper('.sc-slogan .swiper',{
  loop:true,
  effect:'fade',
  navigation:{
      nextEl:'.next',
      prevEl:'.prev',
  }
})

// sc-philosoph 이미지 움직임
introMotion
.addLabel('a')

.to('.sc-philosoph .group-content .img-box.img1',{rotation:-20},'a')
.to('.sc-philosoph .group-content .img-box.img2',{rotation:20},'a')
.to('.sc-philosoph .group-content .img-box.img3',{rotation:20},'a')
.to('.sc-philosoph .group-content .img-box.img4',{rotation:20},'a')

gsap.to('.sc-philosoph .img-box img',3,{
  rotation:-20,
  repeat:-1,
  yoyo:true,
  ease:'none',

})




// sc-store con-slide
 contentSlide = new Swiper('.con-slide',{
  slidesPerView:'auto',
  spaceBetween:20 //사이간격
  })



  // sc-board 리스트 클릭하면 나오게
  $('.board-item .item').click(function(e){
    e.preventDefault();

    gsap.to(window, {delay:0.5,duration: 0.3,  scrollTo:{y: e.target, offsetY: 110}}); 

    if ($(this).hasClass('on')) { //또클릭,내가 선택한거에 on이 있을때는 
        $(this).removeClass('on').siblings('.sub-text').slideUp(); //닫는다
    } else { //첫클릭
        $('.board-item .item').removeClass('on').siblings('.sub-text').slideUp();//전체를 닫아준다
        $(this).addClass('on').siblings('.sub-text').slideDown();//열린다
    }

  })
      
  //sc-product 이미지움직임
  introMotion
  .addLabel('a')

  .to('.sc-product .text-item img',{rotation:-20},'a')

  gsap.to('.sc-product .text-item img',3,{
    rotation:-20,
    repeat:-1,
    yoyo:true,
    ease:'none',

  })




})//지우지마세요


