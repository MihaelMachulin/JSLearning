// Сайт заполнитель - для клиент-серверных тестов https://jsonplaceholder.typicode.com/
// В этом примере мы реально подтянем JSON с сервера и выведем в HTML

document.querySelector('#load').addEventListener('click', load)

function load() {
    let url = 'https://jsonplaceholder.typicode.com/users' // Фейковые данные пользователей

    fetch(url) // Делает запрос на удалённый сервер и возвращает promise
        .then(function (response) {
           // console.log('Response', response) - так мы ничего не получим - респонс он как бы есть, но его как-бы ещё нет
            return response.json() // А вот теперь мы из запроса возвращаем JSON
        })                        //  И прилетит он в следующий .fetch
        .then(function (data) {
            let ul = document.querySelector('#list')
            let html = data.map(item => '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>')
            ul.insertAdjacentHTML('afterbegin', html.join(' '))
        })
}

// Вооот - этот ещё один синтаксис - куда более адекватный, простой и понятный
document.querySelector('#load2').addEventListener('click', load2)
async function load2() { // Сделали функцию асинхронной.
    // После этого можно использовать await и всё становится значительно проще
    let url = 'https://jsonplaceholder.typicode.com/users'

    let response = await fetch(url)   // await - дождаться результата и положить в response
    let data = await response.json() //  вместо .then - что значит следующий
    // Всё, теперь в data лежит JSON и мы проводим те же манипуляции по выводу

    let html = data.map(item => '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>')
    document.querySelector('#list').insertAdjacentHTML('afterbegin', html.join(' '))
}

// Как синронизировать две функции результат которых приходит неодновременно

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), ms)
    })
}

sleep(1500).then(() => console.log('1500'))
sleep(3000).then(() => console.log('3000'))

// А теперь - давим оба окурка одновременно!
Promise.all([sleep(1500), sleep(3000)]).then(() => console.log('All')) // all - срабатывает, когде все приползут
Promise.race([sleep(1500), sleep(3000)]).then(() => console.log('Race')) // race - срабатывает с тем, кто быстрее

// Ниже типа реальный пример, в котором race выводит только половину datы, потому что только её успел получить
let p1 = sleep(4000).then(() => ({name: 'Promise 4000'}))
let p2 = sleep(5000).then(() => ({name: 'Promise 5000'}))
let p3 = sleep(5000).then(() => ({name: 'Promise 5500'}))
// Promise.all([p1, p2]).then((data) => console.log('All', data))
// Promise.race([p1, p2]).then((data) => console.log('Race', data))

// И снова обернём это в красивую ассинхронную функцию!
async function start() {
    let dataRace = await Promise.race([p1, p2, p3])
    let dataAll = await Promise.all([p1, p2, p3])
    // Несмотря на то, что это race, в рамках асинхронной функции его вывод произойдёт
    // одновременно со всеми. Но вот данные он "успеет" получить только из p1

    console.log('dataRace', dataRace)
    console.log('dataAll', dataAll)

}
start()