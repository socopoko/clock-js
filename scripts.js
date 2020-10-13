const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const secondUnit = document.querySelector('.second-unit');
const minsUnit = document.querySelector('.mins-unit');
const hourUnit = document.querySelector('.hour-unit');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondUnit.innerHTML = (seconds < 9) ? `0${seconds}` : `${seconds}`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    minsUnit.innerHTML = (mins < 9) ? `0${mins}:` : `${mins}:`;


    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    hourUnit.innerHTML = (hour < 9) ? `0${hour}:` : `${hour}:`;
}

setInterval(setDate, 1000);