let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let time = document.querySelectorAll('.time');
console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener('click', function () {
  document.querySelector('.slide-list').style.transform = 'translateX(0)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(0)';
})

btn2.addEventListener('click', function () {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(-800px)';
})

btn3.addEventListener('click', function () {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(-1600px)';
})

btn4.addEventListener('click', function () {
  document.querySelector('.slide-list').style.transform = 'translateX(-300vw)';
  document.querySelector('.hand-wrapper').style.transform = 'translateX(-2400px)';
});

//버튼 클래스 추가'제거
$('.btn').on('click', function () {
  $('.btn').removeClass('act');

  if ($('.btn').hasClass('act')) {
    $('.btn').removeClass('act');
  } else {
    $(this).addClass('act');
  }
});

//시계

// let now =  new Date();
// let time = $('.time');

// time.

// for (let i = 0; i < time.length; i++) {
//   time[i].innerHTML = "11";
// }

// time.forEach((element) => {
//   element.innerHTML = "13"
// })



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
