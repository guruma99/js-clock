let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(0)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(0)';
})

btn2.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(-800px)';
})

btn3.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(-1600px)';
})

btn4.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-300vw)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(-2400px)';
});

//버튼 클래스 추가'제거
$('.btn').on('click', function(e){
  // e.preventDefault;
  if($('.btn').hasClass('act')) {
      $('.btn').removeClass('act');
      }else {
        $(this).addClass('act');
      }
});
