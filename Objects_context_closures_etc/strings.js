// Тут про обратные одинарные кавычки (на кнопке с тильдой) и вставку кода в строку через ${код}

// Функция генерящая сылку. Принимает аргументы в объект кде ключ равен значению-переменной
const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul') // Кладём в переменную единственный UL из HTML

// Ниже - строковая магия JS. Но в принципе, мы просто отправляем в функцию объект с аргументами
// изнутри тега LI
const google = `<li>${createLink({path:'https://google.com', name: 'Google'})}</li>`
const yandex = `<li>${createLink({path:'https://ya.ru',      name: 'Yandex'})}</li>`

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)

// Обратные кавычки даже в консоли сохраняют форматирование!
const strToLog = `
    Hello
    World
      I am
        New TAB
`
console.log(strToLog)