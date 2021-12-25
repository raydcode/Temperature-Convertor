let celsius = document.querySelector('.celsius');
let fahrenheit = document.querySelector('.fahrenheit');
let kelvin = document.querySelector('.kelvin');
const form = document.querySelector('form');

const convertTemperature = (e) => {
  if (e.target.classList.contains('celsius')) {
    let x = Number(e.target.value);
    fahrenheit.value = x * 1.8 + 32;
    kelvin.value = x + 273.15;
  }

  if (e.target.classList.contains('fahrenheit')) {
    let x = Number(e.target.value);
    celsius.value = (x - 32) / 1.8;
    kelvin.value = (x - 32) / 1.8 + 273.15;
  }

  if (e.target.classList.contains('kelvin')) {
    let x = Number(e.target.value);
    celsius.value = x - 273.15;
    fahrenheit.value = (x - 273.15) * 1.8 + 32;
  }
};

form.addEventListener('input', convertTemperature);
