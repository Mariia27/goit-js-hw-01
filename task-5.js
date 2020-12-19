// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
//Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. 
//Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const china = "Китай";
const chili = "Чили";
const australia = "Австралия";
const india = "Индия";
const jamaica = "Ямайка";
let cost = 0;

const userCountry = prompt('Введите страну доставки');
let country = userCountry[0].toUpperCase() + userCountry.slice(1).toLowerCase();
let message;
if (userCountry === null) {
  alert('Отменено пользователем')
} 
else { 
  switch (country) {
    case "china":
      cost = 100;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;

    case "chili":
      cost = 250;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;

    case "australia":
      cost = 170;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;
    case "india":
      cost = 80;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`
      break;
    case "jamaica":
      cost = 120;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`
      break;
    
    default:
      message = 'В вашей стране доставка не доступна';
  }
}
  alert(message)
