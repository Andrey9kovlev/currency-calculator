const currency = {
  1: 'Фунт стерлинга',
  2: 'Гривна',
  3: 'Доллар США',
};

const rubSummEl = document.getElementById('rub-summ');
const currencyRateEl = document.getElementById('currency-rate');
const convertButtonEl = document.getElementById('convert-button');
const currencySummEl = document.getElementById('currency-summ');
const emailInputEl = document.getElementById('email');
const subscribeButtonEl = document.getElementById('make-subscribe');

let rubSummValue;
let currencyRate;
let convertedSumm;
let currentCurrencyIndex;
let email;

rubSummEl.addEventListener('keyup', (e) => {
  rubSummValue = e.target.value;
});

emailInputEl.addEventListener('keyup', (e) => {
  email = e.target.value;
});

subscribeButtonEl.addEventListener('click', () => {
  if (email && convertedSumm) {
    console.log(123);
    Email.send({
      Host: 'smtp.yandex.ru',
      // Подставить логин и пароль от действующего ящика yandex.ru
      Username: 'xxx',
      Password: 'xxx',
      To: `${email}`,
      From: 'oleg.kendigelyan@yandex.ru',
      Subject: `Запись на конвертацию валют`,
      Body: `Сумма в рублях: ${rubSummValue}, валюта: ${currency[currentCurrencyIndex]}  конвертированная сумма: ${convertedSumm}`,
    })
      .then(() =>
        alert(
          'Письмо успешно отправленно!'
        )
      )
      .catch((e) => alert('Ошибка при отправке!'));
  } else {
    alert('Вначале рассчитайте конвертируемую сумму и введите email!');
  }
});

convertButtonEl.addEventListener('click', () => {
  if (rubSummValue && currencyRate) {
    convertedSumm = (rubSummValue / currencyRate).toFixed(2);
    currencySummEl.innerText = convertedSumm;
  }
});

currencyRateEl.addEventListener('change', (e) => {
  currencyRate = e.target.value;
  currentCurrencyIndex = e.target.selectedIndex;
});
