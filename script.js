function updateClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const hourDeg = (hour * 30) + (0.5 * minute);
  const minuteDeg = (minute * 6) + (0.1 * second);
  const secondDeg = second * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

function createNumbers() {
  const numbersContainer = document.querySelector('.numbers');

  for (let i = 1; i <= 12; i++) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.innerText = i;
    numbersContainer.appendChild(number);
  }
}

setInterval(updateClock, 1000);
updateClock();
createNumbers();
