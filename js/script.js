const hours = document.querySelector('main .hours');
const minutes = document.querySelector('main .minutes');
const seconds = document.querySelector('main .seconds');

function getTime() {
    const date = new Date();
    const getHour = String(date.getHours()).padStart(2, '0');
    const getMinutes = String(date.getMinutes()).padStart(2, '0');
    const getSeconds = String(date.getSeconds()).padStart(2, '0');
    hours.innerHTML = `<p class="active">${getHour}</p>`;
    minutes.innerHTML = `<p class="active">${getMinutes}</p>`;
    seconds.innerHTML = `<p class="active">${getSeconds}</p>`;
}

const colocarHour = setInterval( getTime , 500);