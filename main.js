let target_date = new Date("Oct 11, 2021").getTime();

let days, hours, minutes, seconds;

function ejemplo() {
  let countdown = document.getElementById("countdown");

  setInterval(function () {
    let current_date = new Date().getTime();

    let seconds_left = (target_date - current_date) / 1000;

    days = parseInt(seconds_left / 86400);

    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);

    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);

    seconds = parseInt(seconds_left % 60);

    countdown.innerHTML = `<h5 class="text-center"> 
        Para el <strong>11 de octubre de 2021</strong> faltan <br/> <strong>${days} días</strong>,  ${hours}
        horas,  ${minutes}  minutos y ${seconds} segundos.
      </h5>`;
  }, 250);
}
