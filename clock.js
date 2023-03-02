const clock = document.querySelector('h1#clock');
const weekday = document.querySelector('#weekday');

let week = ['일', '월', '화', '수', '목', '금', '토'];

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const month = date.getMonth() + 1; // 몇 월인지
  const _date = date.getDate(); // 몇 일
  const day = date.getDay(); // 무슨 요일인지

  console.log(month, _date, day);

  clock.innerHTML = `${hour < 10 ? '0' + hour : hour}:${
    minute < 10 ? '0' + minute : minute
  }`;
  // :${second < 10 ? '0' + second : second}`; 지우기

  weekday.innerHTML = `${month}월 ${_date}일 ${week[day]}요일`;
}

getTime();
setInterval(getTime, 1000);
