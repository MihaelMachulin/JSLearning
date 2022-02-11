// Ошибочный - нерабочий пример смещение контекста и потеря доступа к переменным
let person = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function (ms) {
        console.log(this)
        setTimeout(function (){ // Функция setTimeout смещает контекст .this с данного объекта на Window
         //   debugger
            console.log('Name:', this.name) // данные в переменных объекта недоступны
            console.log('Job:', this.job)
            console.log('Age:', this.age)
        }, ms)
    }
}; person.displayInfo(5000) // передаём пятисекундную задержку

// Рабочий но устаревший вариант с замыканием дыса в доп. переменной
let person2 = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function (ms) {
        let self = this // Замыкаем контекст-объект .this в новую переменную // _this, that - принятые названия переменной для таких случаев
        setTimeout(function (){ // Теперь всё работает
            console.log('Name:', self.name)
            console.log('Job:', self.job)
            console.log('Age:', self.age)
        }, ms)
    }
}; person2.displayInfo(5000) // передаём пятисекундную задержку

/// Рабочий, правильный, современный вариант
let person3 = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function (ms) {
        setTimeout(function (){
            console.log('Name:', this.name)
            console.log('Job:', this.job)
            console.log('Age:', this.age)
        }.bind(this), ms) // .bind(this) - передаёт контекст на .this - т.к. этот метод за скобками функции -
    }                    //  для него .this - это требуемый наш объект
}; person3.displayInfo(5000)
// Оооотакууот!

let person4 = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo(ms) {  // Здесь тоже убрали всё лишнее - такой вариант записи СОЗДАЁТ КОНТЕКСТ // Такая запись доступна только внутри объектов или классов
        setTimeout(() => {  // Иии - ещё вариант - самый современный - мы используем стрелочную функцию, а они
            console.log('Arrow function result:') // не создаёт свой собственный контекст, поэтому .this
            console.log('Name:', this.name)       // остаётся этим объектом и всё работает без bindов
            console.log('Job:', this.job)         // Итого в первой ф-ии мы целенаправленно создали контекст,
            console.log('Age:', this.age)         // а во второй нет - и получили нужный результат
        }, ms)
    }
}; person4.displayInfo(5000)

// Далее продвинутый пример привязки контекста

// Функция распечатывания объекта
// Здесь опять .this указывает на window и ничего не работает
// Но это лечится при вызове функции - смотри ниже
function printObject(objName){
    console.log('Print object:', objName) // Вывод имени объекта из аргумента
    for (let key in this) {              // Перебераем все ключи
        if (this.hasOwnProperty(key)){  // Ограничиваем перебор только персональными свойствами
            console.log('[' + key + ']', this[key]) // Выводим все ключи со значениями
        }
    }
}

let person11 = {
    firstName: 'Max',
    job: 'Backend',
    age: 29,
    friends: ['Elena', 'Igor']
}

let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}

// .bind здесь работает как замыкание - возвращает в переменную функцию с привязкой ко контексту объекта person11
let printPerson = printObject.bind(person11); printPerson(person11)

// Первым параметром .call принимает контекст, а остальными, через запятую все аргументы вызываемой функции
printObject.call(car, 'Car')

printObject.apply(person11, ['Person']) // То же саое, только аргументы принимаются в виде массива

// Но, Владилен говорит, что это костыли и что в новой версии спецификации языка таких проблем не возникает,
// Не возникает их потому, что там есь стрелочные функции, которые не создают свой собственных контекст.

