let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let time = document.querySelectorAll('.time');
console.log(btn1, btn2, btn3, btn4);

// 슬라이드 부분
btn1.addEventListener('click', function () {
  // document.querySelector('.slide-list').style.transform = 'translateX(0)';
  // document.querySelector('.hand-wrapper').style.transform = 'translateX(0)';
  Slide(0);
})

btn2.addEventListener('click', function () {
  // document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
  // document.querySelector('.hand-wrapper').style.transform = 'translateX(-800px)';
  Slide(1);
})

btn3.addEventListener('click', function () {
  // document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
  // document.querySelector('.hand-wrapper').style.transform = 'translateX(-1600px)';
  Slide(2);
})

btn4.addEventListener('click', function () {
  // document.querySelector('.slide-list').style.transform = 'translateX(-300vw)';
  // document.querySelector('.hand-wrapper').style.transform = 'translateX(-2400px)';
  Slide(3);
});

function Slide(index) {
  var list = index * -100;
  var wrapper = index * -800;
  document.querySelector('.slide-list').style.transform = `translateX(${list}vw)`;
  document.querySelector('.hand-wrapper').style.transform = `translateX(${wrapper}px)`;

  if (index < 3) {
    $('.logo_text').css('color','#000');
    $('.underline').css('color','#000');
    $('.clock').css('color','#000');
    $('.logoimg').attr('src','./img/logo_b.png');
  } else {
    $('.logo_text').css('color','#fff');
    $('.underline').css('color','#fff');
    $('.clock').css('color','#fff');
    $('.logoimg').attr('src','./img/logo_w.png');
  }
}

//버튼 클래스 추가-제거
$('.btn').on('click', function () {
  $('.btn').removeClass('act');

  if ($('.btn').hasClass('act')) {
    $('.btn').removeClass('act');
  } else {
    $(this).addClass('act');
  }
});

// let now =  new Date();
// let time = $('.time');

// time.

// for (let i = 0; i < time.length; i++) {
//   time[i].innerHTML = "11";
// }

// time.forEach((element) => {
//   element.innerHTML = "13"
// })


//시계
setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  time[0].innerHTML = ('00' + hours).slice(-2);
  time[2].innerHTML = ('00' + minutes).slice(-2);
  time[4].innerHTML = ('00' + seconds).slice(-2);
}, 1000);

// console.log(now, hours, minutes, seconds);

// 시간흐름에 따른 이미지 자동변경
let now = new Date();
let hr = now.getHours();
// let index = 1;


if(hr >= 6 && hr < 12) {
  Slide(0);
  $(".btn1").addClass('act');
} else if(hr >= 12 && hr < 16) {
  Slide(1);
  $(".btn2").addClass('act');
} else if(hr >= 16 && hr < 20) {
  Slide(2);
  $(".btn3").addClass('act');
} else {
  Slide(3);
  $(".btn4").addClass('act');
};


// night버튼 클릭시 폰트 색상, 로고이미지 화이트로 변경
// $('.btn').on('click', function () {
//   if ($(this).text() == "night"){
//   $('.logo_text').css('color','#fff');
//   $('.underline').css('color','#fff');
//   $('.clock').css('color','#fff');
//   $('.logoimg').attr('src','./img/logo_w.png');
//   }
//   else {
//     $('.logo_text').css('color','#000');
//     $('.underline').css('color','#000');
//     $('.clock').css('color','#000');
//   $('.logoimg').attr('src','./img/logo_b.png');
//   }
// });

// ⚪바닐라js는 css 초기값으로 돌릴때 빈 공백으로 두면됨,
// ⚪jquery에서 css 초기값으로 돌리는 방법?!