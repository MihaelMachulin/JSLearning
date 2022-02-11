// Замыкание, ещё раз...
{
let createCounter = function (counterName) { // Внешняя функция
let counter = 0
    return function (){
        console.log(counterName, ++counter)// Возвращаемая вложенная функция
    }
}
// Отправляем в функцию 'Counter A', а она нам в ответ будет возвращать вложенную функцию с консгль-логом
let counterA = createCounter('Counter A') // Теперь аргумент 'Counter A' доступен внутренней функции
counterA() // Теперь, мы полчаем назад вложенную функцию которой доступны как её собственные аргументы,
// так и аргументы из внешней функции.
let counterB = createCounter('Counter B') // Но! Если мы теперь мы создадим ещё одну перемменную с внешней функцией
// её переменная counter будет независима для этой новой переменной и снова будет равна нулю!
// Это легко можно увидеть в консоли браузера попеременно вызывая counterA()/counterB()
}
console.log('#############################################')

// Более слложный пример:
let createCounter2 = function (counterName){
    let counter = 0

    return { // Здесь мы возвращаем объект с целым набором функций
        increment:  function (){counter++},
        decrement:  function (){counter--},
        getCounter: function (){return counter}
    }
}
let counterC = createCounter2('Counter C')
let counterD = createCounter2('Counter D')
counterC.increment(); counterC.increment(); counterC.increment() // X3  // counterC.getCounter() // 3
counterD.decrement(); counterD.decrement() // X2 // counterD.getCounter() // -2
// Одной и той же функцией мы можем создавать отдельные сущности со своей областью видимости и своими переменными
// Вот-такое-вот - ЗАМЫКАНИЕ - но всё ещё не понятно, когда и где это применять.
