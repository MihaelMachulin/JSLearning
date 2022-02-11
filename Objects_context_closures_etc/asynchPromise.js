// let counter = 0
// let interval = setInterval(function (){
//     console.log(++counter)}, 1000 * 2) // Запускаем счётчик в консоль с интервалом две секунды
// setTimeout(function (){
//     clearInterval(interval)}, 5*1000) // Но через 5 секунд прерываем счётчик
//
// // Client -> Server -> DataBase -> Server -> Client
// // Client - это браузер c HTML
//
// console.log('Клиент: хочу получить список пользователей')
// console.log('...')
//
// setTimeout(function (){
//     console.log('Сервер: запрашиваю список пользователей в БД')
//     console.log('...')
//
//     setTimeout(function (){
//         console.log('БД: формирую список пользователей')
//         console.log('...')
//
//         setTimeout(function (){
//             console.log('Сервер: трансформирую данные для клиента')
//             console.log('...')
//
//             setTimeout(function (){
//                 console.log('Клиент: получил данные и отображаю их')
//             }, 1000)
//         }, 500)
//     }, 500)
// }, 1000)
// Очень неудобная большая вложенность - вложенность колбеков
// Но тут ещё всё просто - с линейной логикой
// Это устаревший подход от которого нужно стараться отказываться

// ПРОМИСЫ!
// То же самое на нормальных технологиях
// Да, пиздец какой-то - сильно легче не стало, чесслово

let promise = new Promise(function(resolve, reject) { // Функция resolve - когда закончили какую-то операцию
    setTimeout(function (){                           // Функция reject  - когда произошла какая-то ошибка
        console.log('Сервер: запрашиваю список пользователей в БД')
        console.log('...')
        resolve() // Запросили - успешно
    }, 1000)
})

promise.then(function (){ // Когда в предыдущей функции наступает resolve() начинается следующий promise.then
    return  new Promise(function(resolve, reject) { //Здесь мы избавляемся от роста вложенности
        setTimeout(function () {
            var users = [
                {uid: 'id1', name: 'Maxim'},
                {uid: 'id2', name: 'Elena'},
            ]
           // reject('БД не шмогла получить список пользователей')
            console.log('БД: формирую список пользователей', users)
            console.log('...')
            resolve(users) // Если мы в ф-ии resolve передаём какие-то данные, они будут доступны в следующей цепочке
        }, 500)
    })
}) // Видимо имеется в виду, что последующие .then престыковываются к предыдущим
.then(function (dbUsers){ // Когда в предыдущей функции наступает resolve() начинается следующий promise.then
    return  new Promise(function(resolve, reject) { //Здесь мы избавляемся от роста вложенности
        setTimeout(function () {
            console.log('Сервер: трансформирую данные для клиента')
            console.log('...')
            var users = dbUsers.map(function (user){
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            })
            resolve(users)
        }, 500)
    })
}) // Да, так и есть, если добавить ; цепочка рвётся и всё ломается
.then(function (users){
    setTimeout(function (){
        console.log('Клиент: получил данные и отображаю их', users)
    }, 1000)
})
.catch(function (error){ // Специальный метод для обработки ошибки
    console.log('Error!')
})
.finally(function (){
    console.log('В финале!')
})