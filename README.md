# js-clock
(23.02.07)

1. footer 버튼 클릭시 js에서 클래스 추가하기
  $('.btn').removeClass('act'); 를 맨 위에 한 줄 더 써놓아야지 정상작동함.
  
2. 현재시간 띄우기
💡setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  time[0].innerHTML = ('00' + hours).slice(-2);
  time[2].innerHTML = ('00' + minutes).slice(-2);
  time[4].innerHTML = ('00' + seconds).slice(-2);
}, 1000);

🔥🤦‍♀️ night 클릭시 로고와 폰트 화이트로 
