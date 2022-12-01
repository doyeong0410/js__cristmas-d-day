const clockTitle = document.querySelector(".js-clock");

function dDay() {
  const cristmasTime = new Date("2022-12-25");
  const toDayTime = new Date();
  const diff = cristmasTime - toDayTime;

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  clockTitle.innerText = `${day}일 ${hour}시간 ${min}분 ${sec}초`;
}

dDay();
setInterval(dDay, 1000);
