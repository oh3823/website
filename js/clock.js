const clock = document.querySelector('#clock');
const weekday = document.getElementById('weekday');
const week = ['일', '월', '화', '수', '목', '금', '토'];

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  clock.innerHTML = `${hours}:${minutes}`;

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const _day = date.getDay();
  weekday.innerHTML = `${month}월 ${day}일 ${week[_day]}요일`;
}

getTime();
setInterval(getTime, 1000);
