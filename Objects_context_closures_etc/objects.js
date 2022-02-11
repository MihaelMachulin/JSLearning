// Создание объектов от класса

function Car (name, year){ // С большой буквф, когда функция на самом деле это Класс
    this.name = name      //  Кто вызывает, тот и .this
    this.year = year
}

Car.prototype.getAge = function (){  // Добавляем функцию в прототип класса Car
    return new Date().getFullYear() - this.year // Вычисляем возраст машины
} // Теперь его деткам - машинкам доступен метод getAge

Car.prototype.color = 'black' // Теперь у всех машинок по-умолчанию цвет black

var ford = new Car('Ford', 2015)
var bmw = new Car('BMW', 2007)
ford.color = 'red' // естественно мы можем заменить цвет у потомка и выводиться через ford.color
// потому, что поиск свойств идёт снаружи вглюбь и до корневого объекта

console.log(ford, ford.getAge(), ford.color)
console.log(bmw, bmw.color)

//  Создаём uaz от глобального объекта. Таким образом получим максимально чистый от свойств и методов uaz
//  .create - это метод глобального объекта Object для создания других объектов
// Он принимает два параметра-объекта {}. Первый наполняет свойствами прототип объекта,
// которые потом будут наследоваться. Второй сам объект обычными свойствами
var uaz = Object.create({
    calculateDistancePerYear: function () {
        Object.defineProperty(this, 'distancePerYear', {enumerable: true, writable: false, configurable: false,
             value: Math.ceil(this.distance / this.age)} ) // Создаём свойство ЗДЕСЬ, по имени, значение - функция
                                          }
}, {
    name:     {value: 'УАЗ',     enumerable:true, writable: false},  // name: "УАЗ" - такая запись тут уже не канает,
    model:    {value: 'Patriot', enumerable:true, writable: false}, //  нужно записывать подробно, через свойства каждого ключа
    year:     {value: 2015,      enumerable:true, writable: false},//   Подробней на MDN "дескриптор свойств"
    distance: {value: 120500,    enumerable:true, writable: true},
    age: { enumerable:true,
           get() {  console.log('Получаем возраст')                 // uaz.age - без скобочек!
                    return new Date().getFullYear() - this.year  },//  Но всё сработает, как будто это функция
           set() {  console.log('Устанавливаем значение')}        //   uaz.age = 3 - и снова вызовется функция
    }
})

uaz.calculateDistancePerYear()
for (let key in uaz) {uaz.hasOwnProperty(key) ? console.log(key, uaz[key]): ''}

console.log('####################################################################')
var person = { name: 'Max', age: 28, job: 'Frontend' }
for (var key in person){  // for in - для итерирование КЛЮЧЕЙ по умолчанию проб
    if (person.hasOwnProperty(key)){ // Ограничиваем - чтобы цикл пробегал только по собственным свойствам
    console.log(key)               } // Иначе он полезет в предков по цепочке наследования
}
console.log(Object.keys(person)) // То же что и выше - только родные ключи объекта, но короче и современней
Object.keys(person).forEach(key => console.log(person[key])) // Выводим значение каждого СОБСТВЕННОГО ключа

console.log('####################################################################')

// А теперь чудеса записи кода ES6!

// Ниже - стрелочная функция в которой мы опустили фигурные скобки и return, а чтобы JS не перепутал скобочки
// создаваемого объекта со скобочками тела функции, мы взяли объект в ещё одни - круглые скобки
// Но это ещё не всё! Кода имя ключа совпадает с его значением, мы можем позволить себе запись вида {name, model}
const createCar =  (name, model) => ({name, model})
const zapor = createCar('Zaporozhec', 'Ushadtiy')
console.log(zapor)

const yearField = 'year'
const zhiga = {
    name: 'Zhiguli',
    ['model']: 'Lada 2106', // Здесь фига в возможности динамического создания ключей
    [yearField]: 2018,       // Можем выражение написать в [], а можем переменную зафигачить

    logFields() { // Это короткая запись созания функции в объекте\классе
        const {name, year, model} = this // деструктуризация - скопом присвоили this всем ключам
        console.log(name, model, year)

    }
}
console.log(zhiga.logFields())
// const year = zhiga.year  ==
const {year} = zhiga; console.log(year) // Просто красивый способ выцепить переменную из объекта
