    //    Разбор главы из книги "Eloquent JAVASCRIPT"       \\
   //     Глава #5 "Функции высшего порядка"                 \\
  //      https://habr.com/ru/post/241155/                    \\

// Подраздел #1 "Вступление"
// Примеры - варианты решения одной и той же задачи -
// суммирование диапазона - циклом и функциями
// Нам хотят показать, что часто прямое решение не так универсально
// и читаемо как решение воодящие новые абстрактные сущности

var total = 0, count = 1; // Пример #1 Просто цикл считающий сумму диапазона
while (count <= 10) { total += count; count += 1;}
// console.log('Single loop:', total);
// Причём хорошим подходом будет написать метод получения выходных данных,
// а потом написать функции которые помогут получить нужный результат.

function sum(rangeArray){// Пример #2
    return rangeArray.reduce((acc, curVal) => {return acc + curVal}, 0)
} // Вот так, я разбил на две функции. Получилось лишнее добавление в массив
  // Задо фунция sum ТОЛЬКО считает сумму массива,
  // а функция range ТОЛЬКО помещает диапазон в массив
function range(firstValue, lastValue){
    let rangeArray = []
    while (firstValue<=lastValue) {rangeArray.push(firstValue); firstValue++}
    return rangeArray;}
console.log('Two functions:sum(range(1, 10))):', sum(range(1, 10))); // console.log из книжки


// Подраздел #2 "Абстракции"
// Здесь будет воссоздан встроенный метод массива .forEach(array, action)
// Который принимает массив и функцию, которая производит действия над каждым
// членом массива.

var array = [1, 2, 3]; // Пример #3 Для каждого элемента в массиве – вывести его в консоль.
for (var i = 0; i < array.length; i++) {    //   Лишняя переменная i
    var current = array[i];                //    Лишняя переменная current
    console.log(current);}                //     И всё это в глобальном окружении

function logEach(array) {                   //   Пример #4 Заключаем то же самое в функцию.
    for (var i = 0; i < array.length; i++) //    Лишние переменные убраны. console.log заключён
        console.log(array[i]); }          //     в тело функции и значит функция может ТОЛЬКО выводить в консоль

function forEach(array, action) {          //    Пример #5
    for (var i = 0; i < array.length; i++)//     Абстрагируем в функцию ТОЛЬКО обработку данных
        action(array[i]); }              //      А действие над данными приходит с аргументом
forEach(["Тили", "Мили", "Трямдия"], console.log); // → Тили // → Мили // → Трямдия

var numbers = [1, 2, 3, 4, 5], sum = 0;   //    Пример #6 Здесь мы пользуемся предыдущей функцией forEach
forEach(numbers, function(number) {//     И передаём в неё некое действие - сложение массива
    sum += number;  });                 //      с переменной. Функция теперь ТОЛЬКО итерирует массив
console.log(sum); // → 15         //       применяя к каждому её члену переданную функцию.

function gatherCorrelations(journal) { // Пример #7 Функция из предыдущей главы
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    } return phis;   }

function gatherCorrelations(journal) { // Пример #8 Функция из предыдущей главы с применением функции forEach
    var phis = {};
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    }); return phis; }


// Подраздел #3 "Функции высшего порядка"

/* Функции, оперирующие другими функциями — либо принимая их в качестве
   аргументов, либо возвращая их, называются функциями высшего порядка.
   Функции – это всего лишь переменные и ими можно оперировать также.   */

function greaterThan(n) {                    //  Пример #9 Функция создающая другие функции
    return function(m) { return m > n; };   //   Функция возвращает другую функцию
}                                          //    Сравнивая входящий аргумент n с аргументом m
var greaterThan10 = greaterThan(10);   //     Вызываем ф-ю с n=10. В переменную вернулась функция
console.log(greaterThan10(11));      //      Вызываем ф-ю присвоенную переменной с аргументом m = 11

// Пример #10 функция меняющая другие функции
// Объект Boolean - без параметров == false.
function noisy(f) {         // Всё что в Boolean попадает вычисляется в true кроме 0, null и undefined
    return function(arg) { // В arg попадает значение из вторых скобок строки с вызовом функции
        // console.log("calling with", arg); // Вызов с тем, что прилетело из вторых ()
        var val = f(arg); // В f у нас оператор Boolean преобразующий значение в булево 0 = false
        console.log("called with", arg, "- got", val);
        return val; // Ничего не даёт и не меняет. Можно даже удалить.
    };
}
// noisy(Boolean)(0);
// Получается так, что во внешнюю функцию ретёрном возвращается внутренняя
// и вот вторые скобки её вызывают с аргументом
// → calling with 0 // → called with 0 - got false


// Пример #11 - функция, создающая новые типы управления потоком выполнения программы.
function unless(test, then) {                 // Функция как-бы отслеживает через переменную test
    if (!test) then();                       //  И вызывает функцию then если test = false/0
}
function repeat(times, body) {                // Функция-итератор
    for (var i = 0; i < times; i++) body(i); //  Повторяет то, что прилетело в аргумент body times раз
} // Вся функция function(n) - доступна внутри repeat. Поэтому body(i) на каждом цикле вызывает
  // функцию из body (aka function(n)) с текущим i в качестве аргумента

repeat(8, function(n) {            // Передаёт в функцию repeat повторить 3 раза функцию,
    // блять, которая в теле вызывает функцию unless
    unless(n % 2, function() {      // А функция unless берёт остаток в первом аргументе, и если
        console.log(n, "is even");           //  он равен нулю (значит чётное) то unless позволяет выполнить
    });                                      //  то, что прилетело к ней вторым аргументом - т.е. вывод в консоль!
}); // Это просто иезуитский сотонизм какой-то!
// → 0 is even // → 2 is even

// Подраздел #5 "Передача аргументов"

// Пример #12  Функция noisy, объявленная ранее, которая передаёт свой аргумент в другую функцию, не совсем удобна.
function transparentWrapping(f) {
    return function() {
        return f.apply(null, arguments); // Метод .apply может передать массив аргументов в функцию
    }; }                                //  Я не понял, зачем нужен этотпример

// Подраздел #4 "JSON" (JavaScript Object Notation )
// JSON.stringify и JSON.parse преобразовывают в и из JSON
// var string = JSON.stringify({name: "X", born: 1980}); console.log(string); // → {"name":"X","born":1980}
// console.log(JSON.parse(string).born); // → 1980
// Данный с родословной в файле CountWord.js https://eloquentjavascript.net/2nd_edition/code/ancestry.js
// var ancestry = JSON.parse(ANCESTRY_FILE); console.log(ancestry.length); // → 39 // Кол-во людей

// Данные для переменной ANCESTRY_FILE
var ANCESTRY_FILE = JSON.stringify([
    {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
    {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
    {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
    {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
    {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
    {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
    {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
    {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
    {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
    {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
    {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
    {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
    {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
    {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
    {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
    {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
    {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
    {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
    {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
    {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
    {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
    {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
    {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
    {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
    {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
    {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
    {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
])
var ancestry = JSON.parse(ANCESTRY_FILE); // Парсим переменную с данными в массив


// Подраздел #4 "Фильтруем массив"
// Здесь мы заново напишем метод массива filter(arr, fun)
// Он итерирует массив применяя к каждому члену функцию
// и возвращает новый массив удовлетворяющий условиям

// Пример #13  - функция читает JSON и выделяет людей рождённых в диапазоне годов
function filter(array, test) { // Функция-обходчик массива. Добавляет по критерию в массив passed
    var passed = [];
    for (var i = 0; i < array.length; i++) { // Из вызова filter в test приходит проверочная функция
        if (test(array[i]))                 //  В эту функцию отправляется член массива i aka person
            passed.push(array[i]);         //   Удовледворяющий условиям член объекта под ключом born
    }                                     //    добавляется в избранные. Вот всё и понятненько!
    return passed;}
// Не знаю, поможет ли это твоему пониманию. Но похоже модель понимания кода через: что из откуда вышо
// и куда пришло неэффективная или даже не верная. А правильно думать - что где\откуда доступно!
console.log(filter(ancestry, function(person) {  // Запрашиваем объекты-члены массива ancestry со
    return person.born > 1900 && person.born < 1925; //  значением ключа born между указанными датами
}));


// Подраздел #5 "Преобразования при помощи map"
// Здесь будет воссоздат стандартный метод массива .map(array, transform)
// Который перебирает массив и применяет к каждому члену преобразующую функцию

// Пример #14 - делаем выборку людей проживших 90+
function map(array, transform) {
    var mapped = [];                        //   Отбираем членов в новый массив
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;             }

var overNinety = ancestry.filter(function(person) {      // Делаем выборку по условию в новый массив
    return person.died - person.born > 90; });
console.log(map(overNinety, function(person) { //  Отправляем массив в map вместе с функцией
    return person.name;     }));                       //   Возвращающей имя людей проживжих более 90 лет
// → ["Clara Aernoudts", "Emile Haverbeke", "Maria Haverbeke"]


// Подраздел #6 "Суммирование с reduce"
// Здесь мы воссоздадим стандартный метод массива .reduce(array, combine, start)
// который принимает массив, функция преобразующая члены массива, значение с какого индекса начинать работать

// Пример #15 - суммируем члены массива
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;                    }
console.log(reduce([1, 2, 3, 4], function(a, b) { return a + b;}, 0));

// Пример с использованием встроенного .reduce
console.log(ancestry.reduce(function(min, cur) { // array.reduce(function(previousValue, currentValue){})
    if (cur.born < min.born) return cur;        //  Аргументы функции в reduce получают текущее и предыдущее значения.
    else return min;                           //   previousValue - накапливает! значение - не путайся!
}));


// Подраздел #6 "Компонуемость"

// Пример #16 - поиск человека с самой ранней датой рождения без функций высшего порядка
var min = ancestry[0];
for (var i = 1; i < ancestry.length; i++) {
    var cur = ancestry[i];
    if (cur.born < min.born)
        min = cur;
} console.log(min); // → {name: "Pauwels van Haverbeke", born: 1535, …}

// Пример #17
// Функции высшего порядка раскрывают свои возможности по-настоящему,
// когда вам приходится комбинировать функции. К примеру, напишем код,
// находящий средний возраст мужчин и женщин в наборе.
function average(array) {                       // Функция взятия среднего
    function plus(a, b) { return a + b; }      //  Функция суммы значений членов массива
    return array.reduce(plus) / array.length; //   Возвращаем сумму делённую на кол-во членов
}
function age(p) { return p.died - p.born; }   //   Три функции просто возвращяют разные значения
function male(p) { return p.sex == "m"; }    //    Из объектов в массиве
function female(p) { return p.sex == "f"; }
// Ниже мы кидаем в average массив отфильтрованный по мужчинам и возрасту
console.log(average(ancestry.filter(male).map(age)));   // → 61.67 // Отбиаем мужчин/женщин, вычисляем возраст,
console.log(average(ancestry.filter(female).map(age))); // → 54.56 // отправляем на вычисление среднего


// Подраздел #7 "Цена"
// Вызов функций тратит больше машинных ресурсов - "дороже", по сравнению с циклами..

// Подраздел #8 "Пра-пра-пра-пра-пра-…"

var byName = {}; // Реорганизует список людей ancestry в немного новую форму
// Строит объект в котором ключ = имени человека byName[person.name]
// а значение - объекту со всеми данными о человеке
ancestry.forEach(function(person) { byName[person.name] = person;});




// Упражнение #1 "Свёртка"
// var arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((acc, val) => acc.concat(val))) // Просто конкатим каждый подмассив к аккумулятору редьюса

// Упражнение #2 "Разница в возрасте матерей и их детей"
// function ageDif(data, person) {
//     dif=0
//     mother = data.find((mother) => mother.name == person.mother) // Ищем маму и если нашли вычисляем
//     if (mother) {dif = person.born - mother.born;}              //  разницу в возрасте с чадом
//     return dif
// }
// function midAge(){
//     let sum = []             // Пустой массив для результатов
//     ancestry.forEach(val =>
//     { // Вызываем в переменную функцию, возвращается разница в возрасте
//         let dif = ageDif(ancestry, val);
//             dif > 0 ? sum.push(dif) : sum;    //  Добавляем в массив только если больше нуля
//     })                                       //   А ноль возвращает ageDif если не нашла маму
//     return sum.reduce((i,j) => i+j)/sum.length // Суммируем массив и находим средий возраст роженничества
// }
// console.log('Сумма разниц лет:', midAge())

// Упражнение #3 - Историческая ожидаемая продолжительность жизни

function getCen(){ return Math.ceil(this.died / 100)}  // Век
function getAge(){ return this.died - this.born     } //  Возраст
function average(array) {                            //   Среднее
    return array.reduce((a, b) => a + b) / array.length;}

function putCenAge(data){  // Функция сбора данных
    let arrAgeCen = {}    //    Новый объект в который будут заноситься пары ключ-век: массив возрастов
    for (per of data){   //     Цикл по членам data
        let cen = getCen.call(per), age = getAge.call(per)   // Получаем век и возраст в переменные для красоты
        if (cen in arrAgeCen){arrAgeCen[cen].push(age) }    //  Если век уже есть, пихаем возраст в массив
        else {arrAgeCen[cen]  =  [age] }   //   Если века ещё нет создаём его с возрастом пЕрсона
    }                                                     //    В массив пихаем, чтобы сохранилось кол-во человек,
    for (var i in arrAgeCen){                            //     Посчитать все средние значения в массивах
        arrAgeCen[i] = average(arrAgeCen[i])            //      и положить обратно в тот же век.
    } return arrAgeCen
} console.log(putCenAge(ancestry));

// Упражнение #4 "Every и some"
// Есть такие встроенные методы массива every и some которые выдают true/false
// применяя проверочную функцию к каждому члену массива.
// every == true, когда ВСЕ члены true, а some - когда хотя-бы один член true
// Сначала я хотел решать это некими другими итераторами или циклами, но потом
// подставив аргументы в every и some напрямую, я получил нужный результат
// Судя по условию задачи - это не верный подход. Верный - не использовать every и some
// Но я получил результат поменяв интерфейс метода, на интерфейс обычной функции
// Оказывается один метод принимающий функцию, может принять другой метод в качестве функции
{
    function every(arr, fun) { return arr.every(fun) }
    function  some(arr, fun) { return arr.some (fun) }

    console.log('Variant 1:', every([NaN, NaN, NaN], isNaN), every([NaN, NaN, 4], isNaN),
        some([NaN,  3,   4 ], isNaN),  some([ 2,   3,  4], isNaN));
    // → true → false → true → false
} //    Фигурные скобочки - изолируют контекст для переменных

// Ниже вариант с циклом for of и без Every и some
// Сначала я пытался использовать методы вот в таком виде:
// arr.forEach((val) => fun(val) === false ? result = false : result = true);
// Это не работает! Поскольку метод всегда доходит до конца и в результате остаётся ПОСЛЕДНЕЕ значение
// Также из метода невозможно адекватно сделать return. На выяснение этого я потратил часа 2 премени!
{
    function every(arr, fun)  { for (val of arr)  { if (fun(val) === false)   return  false }; return true }
    function  some(arr, fun)  { for (val of arr)  { if (fun(val) === true)    return  true  }; return false}

    console.log('Variant 2:', every([NaN, NaN, NaN], isNaN), every([NaN, NaN, 4], isNaN),
        some([NaN,  3,   4 ], isNaN),  some([ 2,   3,  4], isNaN));
    // → true → false → true → false
} //    Фигурные скобочки - изолируют контекст для переменных