       //   Упражнения из книги "Eloquent JAVASCRIPT"         \\
      //    Глава #4 "Структуры данных: объекты и массивы"     \\
     //     https://habr.com/ru/post/240813/                    \\

// Упражнение 1 "Сумма диапазона" \\

// Я ошибся с требованиями в конце упражнения "range(5, 2, -1) возвращает [5, 4, 3, 2]."
// не заметил что 5 и 2 поменялись местами от большего к меньшему и благодаря этому
// написал функцию способную принять почти любые значение в качестве аргументов и выдать некий адекватный ответ

let rangeMassive = []
function range (start, end, step) {
    count = start;
    eee=Math.abs(start-end)/Math.abs(step)
    for (i=0; i<=eee; i++){
        rangeMassive.push(count)
        count+=step;
        console.log(rangeMassive)
    }
    return rangeMassive;

}

function sum (){
    let summa = 0
    for (i=0; i<rangeMassive.length; i++) summa=summa+rangeMassive[i]
    return summa
}

console.log(sum(range(-10, 1.8, -1.5)));
//Конец упражнения 1


// Упражнение 2 "Обращаем массив вспять" \\

// Вариант с возвратом нового массива
function reverseArray (arRay)   {//Вернуть НОВЫЙ массив с обратным порядком элементов
let newarRay = []
for (i=arRay.length-1; i>=0; i--) newarRay.push(arRay[i])
return newarRay                 }
console.log(reverseArray(["A", "B", "C"]));

// Вариант "с двух концов" с рекурсивной функцией. Кол-во итераций длина массива / 2
let i=1
function reverseArrayInPlace (arrayValue) { //Вернуть обратный порядок элементов В ТОМ ЖЕ массиве
    fIrst = arrayValue[i-1]                 //Первый элемент в переменную
    lAst = arrayValue[arrayValue.length-i]  //Последний элемент в переменную
    arrayValue.splice(i-1, 1, lAst)         //Замена первого элемента на последний
    arrayValue.splice(arrayValue.length-i, 1, fIrst) //Замена последнего элемента на первый
    if (i*2<=arrayValue.length-1) { i++; reverseArrayInPlace(arrayValue)} //Рекурсивный вызов функции с итерированным массивом
    // На след. итерации из массива берётся следующий символ слеви и следующий символ справа.
    // i умножается на два так как для оброботки всего массива требуется кол-во итераций равное половине массива
    return arrayValue
}

// Вариант с циклом, методом .splice и временным хранением значения //
function reverseArrayInPlace (arrayValue) { //Вернуть обратный порядок элементов В ТОМ ЖЕ массиве
    for (let i=1; i<=arrayValue.length; i++)    {
        tempArrayMember = arrayValue[arrayValue.length-i]
        arrayValue.splice(arrayValue.length-i, 1)
        arrayValue.push(tempArrayMember)
    }; return arrayValue
}

// Вызов функции с передачей массива и вывод в консоль
var arrayValue = [11, 22, 33, 44, 55];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
//Конец упражнения 2


// Упражнение 3 "Список" \\

var arRay = []

function arrayToList(arRay) { // Проход по массиву с созданием вложенного списка объектов
   // Если есть что вложить.//  На след. итерацию передаём обрезанный на 1 член ▼ ▼ ▼ от начала массив
   if (arRay.length>1)      list = {value: arRay[0], rest: arrayToList(arRay.slice(1))}
   else                     list = {value: arRay[0], rest: null} // Замыкающаа вложенность
   return                   list
   var                      list
}

function listToArray(lst)   {    // Проход по вложенному списку объектов с извлечением значений
    for  (let val in lst) {     // Проход по всем свойствам во входящем объекте lst
        if       (typeof(lst[val]) === 'object') // Если тип свойства 'object'
             listToArray(lst[val])              // рекурсивно вызываем функцию
         else arRay.push(lst[val])             // иначе добавляем значение в массив
    } return arRay                            // Решение взято отсюда https://ru.stackoverflow.com/q/839617/463642
                            }
console.log(listToArray(arrayToList([1, 2, 3, 4, 5]))) //Массив в список и обратно

function prepend(node, list) { // Вкладывает list в объект list2
     list2 = {value: node, rest: list}
     return list2
                             }
console.log(prepend(10, arrayToList([1, 2])))//arrayToList быдаёт вложенный список объектов,
// 10 становится значением value объекта верхнего уровня

var i=0
function nth(list, num)     { // Выдача значения value в указанной в num глубине вложенности
    for (var val in list){
        if (typeof(list[val]) === 'object') {i++; nth(list[val], num)}
        else if   (i==num)        valOfValue = list.value;
                         } return valOfValue
                            }
console.log(nth(arrayToList([10, 20, 30, 456]), 3));

//Конец упражнения 3

// Упражнение 4 "Глубокое сравнение" \\

// Проверка на "объект" в отдельной функции
function isObject(a, b)
{
    return a === null || b === null || typeof a !== "object"  || typeof b !== "object";
}

function deepEqual(a, b)
{
    if (a === b) {return true;} // Самый простой случай - если равны - true
    // Дело в том, что если одна или обе из переменных a или b являются объектом,
    // массивом или null оператор === не считает их идентичными и выдаёт false
    // Значит первый if точно пропустит любые, даже идентичные объекты дальше
    // если бы было null === null то равенство бы сработало
    // Значит дальше могут пройти либо объекты, либо не-равные числа\строки
    // Поэтому дальше и идёт проверка на объект
    if (isObject(a, b)) {return false;} // Вернуть false, если хоть одно условие в функции верно
    // Если бы a и b были равны null - они бы выдали равенство в предыдущем if
    // Значит если одна из переменных null дошла досюда, вторая ей точно не равна
    // Поэтому в функции идёт проверка на a/b === null
    // То же самое с проверкой на не-объект ypeof a !== "object"
    // Если одна из переменной не объект, а, например, число - то она точно не равна другой
    // Таким образом дальше мы можем пройти ТОЛЬКО если обе переменные - объекты
    let keysA = Object.keys(a), keysB = Object.keys(b);//Передаём массивы имён ключей в переменные
    // Метод .keys возвращает массив имён ключей в объекте. Порядковые номера - в случае массивов.
    // Вопрос - на что ссылается Object, находясь в функции
    if (keysA.length !== keysB.length) {return false;} // сравнение количества ключей в двух переменных
    // Если разное, то и объекты - разные

    // Далее мы, наконец, начинаем сравнивать имена ключей в объекте а в цикле с рекурсивной функцией
    for (let key of keysA) // Применяем нижеследующее ко всем ключам объекта а
    {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {return false;}
        // !keysB.includes(key) Метод .includes проверяет наличие элемента в массиве и возвращает true/false
        // В данном случае каждое имя ключа объекта а проверяет на НЕ-присутствие в массиве имён ключей объекта b
        // Если НЕ присутствует - объекты не равны
        // Далее - самый хитрый финт ушами!
        // Происходит рекурсивный вызов функции уже со ЗНАЧЕНИЯМИ ключей а имена ключей, раз уж они идентичны
        // в обоих объектах, что подтверждено предыдущим условием, берутся из переменной цикла
        // key в которую итерационно кладутся имена ключей объекта а
        // Следовательно на следующий рекурсивный вызов в функцию прилетают уже обычные значения взятые из ключей
        // И если они не равны то сразу false, если равны, то след. итерация в цикле, а если объекты,
        // то снова идём вглюбь и итерируем очередной объект в объекте
    }
    return true;
}

let x={q:1, w:{e:3, ee:5, r:{t:'end'}}}, y={q:1, w:{e:3, ee:5, r:{t:'end'}}}
console.log(deepEqual(x, y))
//Конец упражнения 4
//Конец кода из главы #4 "Структуры данных: объекты и массивы"