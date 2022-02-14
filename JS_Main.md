# JS

*Этот документ - “шпаргалка” призван наиболее ёмко и сжато, а значит поверхностно, напомнить  - а что там вообще есть в JS, из чего он сделан, что в нём можно и немного о том - как, и далее увести по ссылкам на подробную документацию.*


<!-- markdown-toc -i JS_Main.md - обновить TOC -->
<!-- toc -->
  * [Переменные, типы данных и операторы](#%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%82%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%B8-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
    + [Значения и переменные](#%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5)
    + [Объявление переменных](#%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85)
    + [Операторы](#operators)
    + [Типы данных](#%D1%82%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
    + [Ключевые слова](#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0)
    + [Циклы](#%D1%86%D0%B8%D0%BA%D0%BB%D1%8B)
    + [Условные операторы](#%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
    + [**Упражнение 2:** проверка на целое деление на 3 и на 5](#%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-2-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D0%BD%D0%B0-%D1%86%D0%B5%D0%BB%D0%BE%D0%B5-%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-3-%D0%B8-%D0%BD%D0%B0-5)
    + [Упражнение 3](#%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-3)
  * [Функции](#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)
    + [Окружение - область видимоси функции](#%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5---%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D0%B8-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)
    + [Вызов функций](#%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B9)
    + [**Замыкания функций** [VID](https://www.youtube.com/watch?v=pahO5XjnfLA) [LNK](https://learn.javascript.ru/closure)](#%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B9-vidhttpswwwyoutubecomwatchvpaho5xjnfla-lnkhttpslearnjavascriptruclosure)
    + [Рекурсия, рекурсивные функции](#%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F-%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)
    + [Остаточные аргументы [LNK](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters)](#%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-lnkhttpsdevelopermozillaorgrudocswebjavascriptreferencefunctionsrest_parameters)
    + [Callback функции (колбэки)](#callback-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%BA%D0%BE%D0%BB%D0%B1%D1%8D%D0%BA%D0%B8)
  * [Структуры данных: объекты и массивы:](#%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B-%D0%B8-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B)
  * [Строки](#%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8)
  * [Массивы](#%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B)
    + [Популярные методы:](#%D0%BF%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B)
    + [Методы высшего порядка:](#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0)
    + [Перебор массива [LNK](https://habr.com/ru/post/247857/)](#%D0%BF%D0%B5%D1%80%D0%B5%D0%B1%D0%BE%D1%80-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-lnkhttpshabrcomrupost247857)
    + [Методы](#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B)
    + [Цепочки методов](#%D1%86%D0%B5%D0%BF%D0%BE%D1%87%D0%BA%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2)
  * [Объекты](#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B)
    + [Доступ(обращение) к свойствам](#%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%D0%BC)
    + [Деструктуризация](#%D0%B4%D0%B5%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F)
    + [Объект arguments](#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-arguments)
    + [Объект Math](#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-math)
    + [Объект global](#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-global)
    + [Get и set - геттеры и сеттеры](#get-%D0%B8-set---%D0%B3%D0%B5%D1%82%D1%82%D0%B5%D1%80%D1%8B-%D0%B8-%D1%81%D0%B5%D1%82%D1%82%D0%B5%D1%80%D1%8B)
    + [Упражнение сумма диапазона](#%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D1%83%D0%BC%D0%BC%D0%B0-%D0%B4%D0%B8%D0%B0%D0%BF%D0%B0%D0%B7%D0%BE%D0%BD%D0%B0)
    + [Упражнение массив вспять](#%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2-%D0%B2%D1%81%D0%BF%D1%8F%D1%82%D1%8C)
  * [Функции высшего порядка](#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0)
    + [Абстракции.](#%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%86%D0%B8%D0%B8)
    + [Функции высшего порядка](#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0-1)
  * [Регулярные выражения REGEXP](#%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-regexp)
  * [Прототипы и наследование](#%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D1%8B-%D0%B8-%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    + [Полиморфизм [VID](https://www.youtube.com/watch?v=ll1GV-v1J4c)](#%D0%BF%D0%BE%D0%BB%D0%B8%D0%BC%D0%BE%D1%80%D1%84%D0%B8%D0%B7%D0%BC-vidhttpswwwyoutubecomwatchvll1gv-v1j4c)
  * [Контекст this](#%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82-this)
  * [Классы](#%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B)
    + [Наследование](#%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    + [**Mixin** (примеси)](#mixin-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%81%D0%B8)
  * [Ассинхронность](#%D0%B0%D1%81%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C)
  * [Изменение HTML работа с DOM](#%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-html-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-dom)
- [Продвинутые концепции](#%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D0%B8)
  * [Модули](#%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B8)
  * [Generators - функции-генераторы](#generators---%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
  * [Proxies - прокси-объекты [VID](https://youtu.be/np08WdS9OXg)](#proxies---%D0%BF%D1%80%D0%BE%D0%BA%D1%81%D0%B8-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B-vidhttpsyoutubenp08wds9oxg)
  * [Хэширование](#%D1%85%D1%8D%D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
  * [Service Worker](#service-worker)
  * [Event Loop, микро и макрозадачи, Web Workers](#event-loop-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE-%D0%B8-%D0%BC%D0%B0%D0%BA%D1%80%D0%BE%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-web-workers)
  * [Serialization - сериализация](#serialization---%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F)

<!-- tocstop -->

### [Eloquent Javascript](https://habr.com/ru/post/240219/). [Видеокурс](http://youtube.com/watch?v=Bluxbh9CaQ0&t=30s).

## Переменные, типы данных и операторы

### Значения и переменные

**Строки:** &emsp; `“строка” = ‘строка’` &emsp; 
`'\'` = экранирование: 
`\”`; &emsp;`\t` = tab; &emsp;`\n` = Enter;&emsp; `\\`. 
`“стро” + “ка” = 'строка'`.

`console.log(typeof "x")` - тип значения в кавычках

`null` и `undefined` - когда нечего вернуть - неприсвоенные значения

**Преобразования типов(автоматические):** `(8 * null) → 0;`
`("5" - 1) → 4;` `("5" + 1) → 51;` `("пять" * 2) → NaN;`
`(false == 0) → true;` `(null == undefined) → true;`
(`null == 0) → false;` `==` равенство; `===` идентичность

### Объявление переменных

**Область видимости:** глобальная, внутри функций, внутни блоков - циклов и условных. Переменная видна для всех дочерних конструкций.**Поднятие (hoisting):**

Все переменные и объявления функций поднимаются вверх своей области видимости.

“Поднимается” только объявление, но не присвоение значения.

Вызов функции может быть как до, так и после объявления ф-ии.

Объявление переменной может быть ниже чем присвоение ей значения.

Все необъявленные переменные становятся глобальными! Т.е. присвоив значение function qqq(){x=3} и вызвав qqq() - x - будет доступна снаружи функции. А если написать **let x = 3**, то не будет!

**'[use strict](https://ru.stackoverflow.com/questions/435546/%d0%a7%d1%82%d0%be-%d0%b7%d0%bd%d0%b0%d1%87%d0%b8%d1%82-use-strict)';** - включает “строгий режим” и выдаёт ошибки в “неоднозначных” местах.

**var** - переменная будет видна внутри функции.

**let** - переменная будет видна только внутри блока **for/if**

**const** - значение не может быть изменено или переназначено. Поднятие - как у let

### Операторы <a id="operators"/>

```jsx
(+, -, *, /, and %), (==, !=, ===, !==, <, >, <=, >=)
= это оператор присвоения!
== оператор сравнения на равенство
=== сравнение на идентичность в т.ч. с учётом типа данных. Использовать именно это!
2 == '2' = true, 2 === '2' = false
Унарные\бинарные операторы - работают с одним\двумя значениями.
Булевы: true и false. console.log(3 > 2) // → true
console.log("Арбуз" < "Яблоко") // → true Сравнивает номера по Unicode
console.log(NaN == NaN) // → false - NaN-NotaNumber
```

```jsx
[Логические](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B):
И && всё выражение true только если все условия true
ИЛИ || всё выражение true если хотя бы одно условие true
let ii = 3 > 2 && 5 != null && 3*2==7
console.log(ii) //true пока все true**
var ili = 3 > 2 || 5 != null|| 3*2==7**
console.log(*ili*) //true пока хоть одно true**
if(ii){} //если true >> выполнить**
if(!ili){} //если false >> выполнить**
НЕ !true → false / !false → true

Проверка условия true ? 1 : 2 → 1 / false ? 1 : 2 → 2 
[Приоритет](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence): || < && < сравнения < остальные. 1 + 1 == 2 && 10 * 10 > 50 // no ()!
```

### Типы данных

```jsx
Девять типов данных: booleat, string, symbol, number, object, undefined, null, nAn, BigInt 
Оператор typeof **x** / typeof (x) - возвращает тип аргумента. if (typeof(val) === 'object')
Boolean ('' || 0 || null || undefined || ***NaN*** && false) === false

1 + “2” = 12; “ ”+ 1 + 0 = 10; “ ” -1 + 0 = -1; ‘3’ * ‘8’ = 24; 4 + 10 + ‘px’ = 14px;
```

Мутирование

### Ключевые слова

var one = 1, two = 2;

var - устаревшее, const - константа, let

**;** - не нужны!

**Окружение** - оно же - область видимости - то какие переменные доступны из определённого места кода. Как правило ограничивается { } - т.е. объектами и функциями. Есть тнз. поднятие переменных - и определёные правила о том, что в коде будет исполняться в первую очередь.

функция(аргумент) - вызов функции, возврат значения.

console.log(Math.min(2, 4) + 100); //функция внутри выражения

**var** theNumber = Number(prompt("Выбери число", "Текст по умолчанию"));

alert("Твоё число – квадратный корень из " + theNumber * theNumber);

Фигурные скобки для инструкций – как круглые скобки для выражений. Они группируют их и превращают в единое. Последовательность инструкций, заключённая в фигурные скобки, называется блоком.

### Циклы

**while (exp) { инструкция } // If exp = false -> skip {}**

**while (count <= 10) { code } // повторять, пока выполняется условие в скобках.**

**do { инструкция } while (exp); //Делает один проход - до проверки условия.**

**do { var name = prompt("Who are you?");} while (!name); console.log(name);**

**for(инициализация; проверка; инкремент) { инструкция }**

**for (var number = 0; number <= 12; number = number + 2) console.log(number);**

**for (var number = 0; number <= 12; number += 2)
for (i = 0, j = 0; i < 10; i++, j++)**

**for...of** - перебирает значения **for...in** - перебирает ключи!

**for...of for (let car of cars) {console.log(car)}** //поочерёдно кладёт в car каждый член массива cars и применяет к нему то что в {}

**for...in** проходит только по перечисляемым свойствам

**for (variable in object) {...}**

variable - очередное имя свойства назначается переменной на каждой итерации.

object - объект, по чьим свойствам мы проходим

for (let val in lst){ //

if (typeof(lst[val]) === 'object')..// Набор перечислимых свойств, поэтому к ним нужно обращаться, как к массиву lst[val]

var ***array*** = [10, 20, 30, 40, 50] // +3 к каждому члену массива

for (let i in ***array***) { ***array***[i]+=3 }

### Условные операторы

```jsx
isReady ? действие : действие 
// Тернарное выражение ? - заменяет if, : - заменяет else; 
// isReady - true\false - true - 1вое действие, false 2ое

switch (prompt("Как погодка?")) {
  case "дождь": console.log("Не забудь зонт."); break;
  case "снег": console.log("Блин, мы в России!"); break;
  case "солнечно": console.log("Оденься полегче.");
  case "облачно": console.log("Иди гуляй.");break;
  default: console.log("Непонятная погода!"); break;
}
var smb = ""; for (var eee = 1; eee <= 7; eee++) {smb = smb + "#"; console.log(smb);}
```

Оказалось, что в аргументах функции можно вызвать другую функцию и это норм.

[continue](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/continue) [[метка](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label)]- прерывает цикл и запускает след. итерацию

[brake](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/break) - прерывает цикл и выходит из него

### **Упражнение 2:** проверка на целое деление на 3 и на 5

```jsx
var count = 1;
while (count < 100){
   if (count%3==0 && count%5==0) console.log("FizzBuzz");
   else if (count%3==0) console.log("Fizz");
   else if (count%5==0) console.log("Buzz");
   else console.log(count);
count++;
}
```

### Упражнение 3

```jsx
var count=1, trig=1, countLenth=1, stroka="";
while (count<=100){
   stroka = stroka + "# ";
   if (countLenth==10 && trig==1) { stroka = stroka + "\n "; countLenth = 0; trig=0;}
   else if (countLenth==10) { stroka = stroka + "\n"; countLenth = 0; trig=1;}
   count++; countLenth++;
}
console.log(stroka);
```

## Функции

[**Стрелочные функции**](https://flagman.top/about-business/php-i-t-p-uzelki/strelochnye-funkcii-v-javascript). Стрелочные функции не создают собственный контекст.

**Функция** - это оборачивание куска кода с некоторым функционалом для возможности многократного к нему обращения.

На самом деле - описание выше - это ещё не функция, а процедура. Настоящей функцией она станет когда при её вызове в неё будут переданы какие-то аргументы и она вернёт какое-то значение.

**Чистая функция** - такая, которая при одних и тех же входящих данных выдаёт одинаковый результат. В её теле не должно появляться randomных значений текущей даты и времени, значений из глобального окружения DOM, файлов, баз данных и т.д. Но всё это может приходиь в неё в качестве аргументов. Чистые функции не изменяют (не мутируют) входящие параметры. 
Преимущества чистых функций: она самоочевидна - понятно что она делает, проста в тестировании - можно подать на неё отдельно различные аргументы и проверить результат, возможен её параллельный вызов - т.к. она не зависит от внешних воздействий, она кэшируема.

Функцию можно использовать точно, как переменную: сохранить в новой переменной, передать как параметр другой функции. 

Функции **нельзя** помещать внутрь циклов и условных операторов. Но их вызов - можно.

Параметры функции – такие же переменные, но их начальные значения (аргументы функции) задаются при вызове функции, а не в её коде.  Каждый вызов функции никак не связан с другими её вызовами - она снова чиста для работы с новыми вводными.

Обявление внутри функции переменной с именем идентичным глобально объявленной переменной “запирает” глобальную переменную внутри этой функции.

```jsx
function rAnge (start, end) { return start*end;}; //start и end - это параметры, они используются как локальные переменные внутри функций.
console.log(rAnge(3, 5)); // При вызове функций в каждый параметр может быть отправлено значение(аргумент).
После команды return из функции прилетит некий результат в то место откуда её вызвали. Прилетят не параметры\аргументы, а результат работы функции.

var square = function(x) { return x * x; }; console.log(square(12)); //функция сразу выполняется и результат её работы кладётся в x.

var power = function(base, exponent) { var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base; return result; };
```

### Окружение - область видимоси функции

*Глобальная, область видимости функций, блочная.* [LNK](https://puzzleweb.ru/javascript/4_variables3.php), [LNK](https://learn.javascript.ru/closure)

Локальную область видимости создают только функции.
Функции объявляются при загрузке скрипта, а не в том месте где они расположены в коде, а значит могут быть вызваны из любого места скрипта.

Но есть два способа: объявление функции (Function Declarftion) `function fun(){}` и выражение функции (Function Expression) `const fun = function(){}`. В первом случае функция будет видна отовсюду вверх и вниз по коду, а во втором только после строки с в которой мы положили функцию в переменную

Переменные объявленные внутри функций видны везде внутри функции в том числе внутри вложенных функций.

Переменные видны и вперёд и назад по коду от точки объявления т.е. в т.ч. заранее - до объявления, но только внутри текущей области видимости.

Определяя в локале переменную с именем идентичным переменной из глобали локальная переменная перезаписывает глобальную. Если присвоить значение необъявленной переменной внутри функции - создастся соотв. глобальная переменная.

`function fun(a, b = 1) {a + b}` - у b задано значение аргумента по-умолчанию - если ничего не будет передано в него при вызове функции подставится 1. `function fun(a = 40, b = a * 2) {a + b} // = 120` - и так тоже можно!

`function fun(...all)` - все - любое число входящих аргументов. all при этом переменная содержащая массив аргументов. Называется [Spread](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - оператор.

### Вызов функций

Если при вызове функции лишний аргумент - он игнорируется, если не хватает, то undefined. Этим можно пользоваться через условные операторы.

### **Замыкания функций** [VID](https://www.youtube.com/watch?v=pahO5XjnfLA) [LNK](https://learn.javascript.ru/closure)

```jsx
function *f*(n) { 
	return function (num)  { return n + num } 
}
const ***f2*** = *f*(10); ***console***.log(***f2***(5))
```

В f2 кладём вызов функции *f* с аргументом 10. 
Теперь внутри *f* доступен аргумент *n* равный 10.
Сама *f* возвращает безымянную функцию.
Теперь в *f2* ЯВЛЯЕТСЯ функцией с известным *n* и неизвестным *num.*

Далее вызывая *f2* мы передаём в аргумент *num* число 5.
Всё - оба слагаемых известны - функция возвращает результат.
`console.log` выводит результат в консоль.

Также легко делается и тройная вложенность (но зачем!?)

```jsx
function f(n) {
	return function (num) {
		return function (z){ return n+num+z }
	} 
}; f2 = f(10); f3 = f2(5); console.log(f3(2))
```

### Рекурсия, рекурсивные функции

Функция может вызывать сама себя.

### Остаточные аргументы [LNK](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters)

Набор неограниченного числа аргументо - всех прочих, кроме основных. Можно работать, как с массивом.

```jsx
function myFun(a, b, ...manyMoreArgs) {
console.log("a", a);
console.log("b", b);
console.log("manyMoreArgs", manyMoreArgs); 
}; myFun("один", "два", "три", "четыре", "пять", "шесть");
// Console Output: // a, один // b, два
// manyMoreArgs, [три, четыре, пять, шесть
```

### Callback функции (колбэки)

Передача функции в функцию в качестве аргумента - это колбэк.
Коллбэк — это функция, которая должна быть выполнена после того, как другая функция завершит работу.

## Структуры данных: объекты и массивы:

Если i = [ ] это массив,  i = { } - это объект,  i = ‘ ’ - это строка

## Строки

```jsx
console.log("кокосы".slice(3, 6)); // → осы
console.log("кокос".indexOf("с")); // → 4
console.log("раз два три".indexOf("ва"));// → 5
console.log("  ладно  \n ".trim());// → ладно
var string = "abc";
console.log(string.length); // → 3
console.log(string.charAt(0)); // → a
console.log(string[1]); // → b
```

## Массивы

**var** listOfNumbers = [2, 3, 5, 7, 11]; //отсчёт с нуля

console.log(listOfNumbers[1]);

value.x вызывает свойство под именем “x”, а value[x] вычисляет выражение x и использует результат в качестве имени свойства. value['John Doe']

cars[cars.length] = ‘Mazda’ // добавляет элемент в конец массива

### Популярные методы:

.unshift / .push - положить элемент в начало/конец
.shift / .pop - отсекает первый/последний элемент и возвращает в качестве результата;
.indexOf(X) / .lastIndexof(X) - индекс элемента X. Ищется с начала / конца.
includes(X) - является ли X членом массива true\false
.reverse - перевернуть массив

```jsx
text = "Перевёртыш!"
t_e_x_t = text.split("")     //Разделить на массив по разделителю ""
t_x_e_t = t_e_x_t.reverse() // Перевернуть массив
txet = t_x_e_t.join("")    //  Соединить через разделитеть ""

console.log(txet)
console.log(text.split("").reverse().join(""))
```

### Методы высшего порядка:

*Преобразование всего массива к новому массиву, фильтрация массивов.*

Методы-итераторы - применяющие функцию к каждому члену

.forEach - не возвращает ничего, функция в () должна сама что-то выдать.
.map - возвращает нов. массив после применения функции к каждому члену
.filter - вычленяет в новый массив по условию в функции.
.reduce - собирает значение из членов массива в одно
.concat - склеивает массивы arr1.concat(arr2)
.findIndex / .find - поиск внутри массивов объектов
.slice -
.every -
.some -

```jsx
// Прошлись по массиву нашли объект с наличием нужного значения и всё в одну строчку
const person = people.find(person => person.budget === 3500) 

aRray = [ {x: '111', y: '222', z: 333},
{x: 444, y:555, z:666},
{x:777, y:888, z:999} ]

console.log(aRray.findIndex(eee => eee.z == 999))

// Вместо filter - быстрей, понятней и удобней:
let uniqueArray = [...new Set([1, 2, 3, 3,3,"school","school",'ball',false,false,true,true])];
// На выходе получаем: [1, 2, 3, "school", "ball", false, true]

arr.map(function(value, index, arr))
// value - каждое из значений arr, index - каждого из значений, arr - именно этот 
// же массив над которым проводятся действия под “псевдонимом”. В теле функции же 
// можно принимать и обрабатывать любой объявленный массив и взаимопересекать массивы. 
// В метод .map очень подходят => функции

const upperCaseCars = cars.map(car => car.toUpperCase())  //Все члены массива с большой буквы

массив.метод(функция).метод(функция) //Последовательное применение к массиву нескольких методов

.slice(x, y) - возвращает из массива массив с членами от x до y

Array.from(stroka)//Массив из строки
console.table(array) //Вывод 2D массива в табличном виде
console.log(array[1][1]) //Вывод члена 2D массива по индексу 1:1

```

### Перебор массива [LNK](https://habr.com/ru/post/247857/)

**// Перебор 2D массива. forEach проходит по строкам, forEach во вложенной функции - по элементам**

**array.forEach((subArray) => {**

**subArray.forEach((item) => { console.table(item); }); });**

for...of и for...in также описаны в циклах. for...in перебирает любые перечисляемые свойства, а for...in именно ползёт последовательно по индексам массива

Свойства

myString.length - длина строки - доступ к св-ву length переменной myString

Math.max - получение максимума - доступ к свойству max объекта Math

value.x вызывает свойство под именем “x”, а value[x] вычисляет выражение x и использует результат в качестве имени свойства.

### Методы

Методы – это функции, живущие среди свойств.

Всё может быть и функцией и методом. Когда функция вызывается применительно к объекту в виде “функция.метод” она становится методом.

[Методы строк](https://tproger.ru/articles/metody-strok-v-javascript-shpargalka-dlja-nachinajushhih/). ***console***.log("Hello Tproger".split("")[6])//T

[Методы массивов](https://tproger.ru/translations/javascript-cheatsheet/#arrmthdsmapfltrrdc) mack.push("который", "лопнул"); //Add 2 END

console.log(mack.pop()); //Del from END & return element

console.log(mack.join(" ")); //Объединить в строку через пробел

### Цепочки методов

[LNK](https://zen.yandex.ru/media/id/5f69d7bc996f72469a11c66f/javascript-cepochka-metodov-dlia-chego-i-kakmethod-chaining-5fb8a827ffe1de7f5c37564a),

Погуглить по chaining in javascript

## Объекты

[Все стандартные встроенные объекты](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects).

Объект - переменная содержащая в себе произвольный набор элементов. Целый массив может быть одним из элементов. Даже функция может быть элементом объекта. Но и объект может быть элементом массива.

`obj.country='ru'; obj['city']='Moscow';` - добавит новый ключ со значением в объект.
`delete obj.name;`- удалить ключ
`console.log("key" **in** anObject); //true/false` - in проверяет наличие св-ва
`переменная = { Ключ: ”Значение”, Ключ: 321 }`

Массив отличается от объекта лишь упорядоченостью. В объекте элементы поименованы. В массивах неявно пронумерованы.

В качестве элемента объекта может быть всё что угодно: строка, число, boolean, массив и даже функция в качестве метода

```jsx
const person = {
   name: 'Vladilen',
   age: 26,
   isProgrammer: true,
   languages: ['ru', 'en', 'de'],
   'complex key': 'Complex Value',
   ['key_' + (1 + 3)]: 'Computed Key', // key_4
   greet() {console.log('greet from person')},
   info() {console.log('this:', this)
           console.info('Информация про человека по имени:', this.name)}   }

console.log(person.name); const ageKey = 'age'; console.log(person[ageKey]);
console.log(person['complex key']); person.greet(); delete person['key_4'];
const {name, age: personAge = 10, languages} = person //деструктуризация
```

### Доступ(обращение) к свойствам

[Точечная и скобочная записи](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors#dot_notation).

### Деструктуризация

Способ "разобрать" объект/массив в переменные в одну строку*. [Подробней…](https://tproger.ru/translations/delaem-kod-chishhe-s-pomoshhju-destrukturizacii-obektov-v-javascript/)*

```jsx
ancestry[3].name // Значение при ключе name в 3ем вложенном в массив объекте
let [firstName, , surname] = arr; // => 0 и 2 член массива в переменные
const { nme, eml } = obj;// знач-е ключей nme и eml объекта obj теперь в перем-х
const { name: customerName, email } = customer;// Попутно меняем имя 1ой перем-ой
let name, email; ({ name, email } = customer);//  Присваивание уже объявленным
const streetNo = customer.address.streetNo;  // Обращение к значениям в ключах
const city = customer['address']['city'];   //  во вложенных объектах
const { name, address: { streetNo, city } } = customer;// То же что выше
if (!married) { married = 'N/A';} // Если нет значения присвоить N/A
const { name, married = 'N/A' } = customer; // То же что выше
const { name, ...rest } = customer;// после name все св-ва в переменную rest
let { name, email } = getCus() || {};// Если функция обломит присвоится пустой {}
```

[Перебор (итерирование) объектов](https://www.notion.so/e4996d7d1e184a3b93f0c4e6ebb57b7c)

### Объект arguments

[Отсылка к остаточным аргументам функций >>>](about:blank#%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-lnk)
[arguments](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments#%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5) - это подобный массиву объект, содержащий аргументы, переданные в функцию.
arguments — это локальная переменная, доступная внутри любой (нестрелочной) функции.
Объект arguments можно использовать при вызове функции с б**о**льшим количеством аргументов, чем было предусмотрено в её объявлении.

`console.log(arguments[0])`     // вывести значение аргумента номер ноль
`arguments[1] = 'new value';` // задать значение

Из свойств массива у arguments есть только length

`arguments.length` //длинна-кол-во переданных в функцию аргументов
`console.log(typeof arguments)` // 'object'
`console.log(typeof arguments[0])` // выведет тип первого аргумента

### Объект Math

Сам объект просто контейнер для методов.

console.log(Math.floor(Math.random() * 10));// Случайное число от 9 до 10

Округление до ближайшего целого Math.floor - вниз, Math.ceil - вверх, Math.round - до ближайшего

Math.floor(Math.random() * (max - min) + min) // Получаем целое случайное число в диапазоне между min и max

### Объект global

Каждая глобальная переменная является свойством объекта **global**, в браузере - аналог **window**.

**var** myVar = 10;

console.log("myVar" **in** window);// → true

console.log(window.myVar);// → 10

Ниже более строгий синтаксис создания объектов и их свойств, дающий больше контроля..

let newObject = **Object.create**(Объект-прототип, необяз. св-ва нового объекта)

**Object.defineProperties**(Изменяемый объект, дополняемые свойства) [MDN>>>](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

// На основе пустого объекта создаём объект со св-вами [VID>>>](https://youtu.be/cS6nTVNzOPw?t=40) [MDN>>>](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

let newObject = Object.create({}, {
'property1': { // Каждое свойство - объект
value: true, // Эти булевы ключи называются - **дескрипторы**
writable: true, // Позволяет менять значение.
enumerable: true}, // Перечислимое - его видят циклы for in
'property2': {
value: 'Hello', // Значение кри ключе, как в обычном объекте
configurable: false}// Позволяет менять\удалять само свойство
})

### Get и set - геттеры и сеттеры

Эти штуки лежат в значениях свойств объектов и…

**Get** - выполняет произволный набор операций при обращении к свойству `object.prop`

**Set** - выполняет произволный набор операций при попытке присвоения `object.prop =`

**Get** - способ запихнуть в свойство вместо простого значения некое выражение вычисляющее значение или вообде делающее что-то другое. Может быть только один под одним свойством.

Objct = Object.create({}, { a:{ get() {return 'Бдыщь!'} } });

console.log(Objct.a)

// Два синтаксиса прдробный и обычный

Objct2 = { get a() {return 'Бабах!!'}, b(){ return 'Бадабум!' }} ;

console.log(Objct2.a, Objct2.b());

// Вообще нихуя не понятно - в чём разница между get и обычной функцией, кроме того, что функцию мы вызываем через () а от get сразу получаем результат.

### Упражнение сумма диапазона

var ***rAngeMassive*** = [];

function rAnge (start, end) {

while (start<=end) {

***rAngeMassive***.push(start);

start++;

}

return ***rAngeMassive***;

}

var ***sUm***=0;

function sum (start, end) {

rAnge (start, end);

for (let i=0; i<***rAngeMassive***.length; i++)

***sUm*** += ***rAngeMassive***[i];

return ***sUm***;

}

***console***.log(sum(33, 77));

//Вариант 2

function rAnge (start, end) {

var rAngeMassive = [];

while (start<=end) {

rAngeMassive.push(start); start++;}

function sum () {

var sUm=0;

for (let i=0; i<rAngeMassive.length; i++)

sUm += rAngeMassive[i];

return sUm;}

return sum (rAngeMassive);

}

***console***.log(rAnge(33, 77));

### Упражнение массив вспять

## Функции высшего порядка

### Абстракции.

Вынос в абстракцию. - в коде - это обозначение частей кода в именованные сущности и
манипулирование ими. Так проще понимать код и избегать ошибок.

**function** **forEach**(array, action) { // Функция прилетает в аргументе

**for** (**var** i = 0; i < array.length; i++)

action(array[i]); 

forEach(["Тили", "Мили", "Трямдия"], console.log);

**var** numbers = [1, 2, 3, 4, 5], sum = 0; // Функция создаётся прямо в аргументе

forEach(numbers, **function**(number) {sum += number;}); console.log(sum);

### Функции высшего порядка

Функции, которые оперируют другими функциями — либо принимают их в качестве аргументов, либо возвращают их.

```jsx
// Функция возвращает функцию
function greaterThan(n) {return function(m) { return m > n; };} 

var greaterThan10 = greaterThan(10); // Переменная = функции с аргументом 10
// Теперь в переменной то, что вернула внешняя функция, т.е. function(m)
console.log(greaterThan10(11)); //Теперь во внутреннюю ф-ю мы кидаем 11
// И вуаля! Похоже на замыкание. // Бля - это и есть замыкание!

function noisy(f) {
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got", val);
		return val;
	}
}

noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false
```

## Регулярные выражения REGEXP

[MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [BOOK](https://habr.com/ru/post/242695/), 

```jsx
// Создание регулярных выражений
var re1 = new RegExp("abc"); // с использованием конструктора
var re2 = /abc/;            //  литеральная запись
!/srv_.*/.test(col) // если слово начинается не с srv_ то true
// . - означает любой символ и * - означает любое количество символов
```

## Прототипы и наследование

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#using_prototypes_in_javascript),

Всё есть объект.

Объекты могут быть друг другу предками и потомками .

Потомки могут наследовать свойства и методы предков.

У потомков есть доступ НА ЧТЕНИЕ к свойствам всех его предков.

Таким образом создаются **цепочки наследования**.

__proto__ - есть у всех объектов т.к. все объекты сознады на основе других объектов.

__proto__ - объектов одинаковых типов равны

__proto__ объекта === втроенному объекту JS (см. MDN)

__proto__ - свойство объекта ссылающееся на "наследство" предка

__proto__ любого объекта ссылается на prototype объекта, который его породил

prototype - может быть только у class либо у function

prototype - это "шаблон", по которому объект отдаёт св-ва и методы своим потомкам

let per2 = Object.create(per1); //Создать в переменной per2 объект который унаследует свойства и методы объекта per1.

"**конструктор**" - это просто функцияя, которую вызывают через оператор **new**

var potoMok = new preDok();

Удивительно, но если передать в предковую функцию свойство через .prototype preDok.prototype.foo = "bar" оно не будет доступно напрямую в этой функции preDok.foo >> undefined, но будет доступно у всех её потомков potoMok.foo Также к этому св-ву можно будет обратиться через preDoc.prototype.foo

**Object.create -** var b = Object.create(a) //Создать b в качестве потомка от a

**delete -** delete b.a // удалить свойство a в объекте b

**hasOwnProperty -** проверяет - есть ли у объекта такое собственное - неунаследованное свойство? g.hasOwnProperty('nope') // true/false

### Полиморфизм [VID](https://www.youtube.com/watch?v=ll1GV-v1J4c)

Полиморфизм - это изменение поведения одного и того же метода в рамках разных классов. Это когда экземпляр класса объявляет методы с таким же именем, как у родителя и меняет\дополняет их поведение.

## Контекст this

**this** всегда указывает именно на объект, из которого вызвана функция, а не на объект, в котором она написана и лежит. Пока функция не вызвана неизвестно на что указывает this

**.call** вызывает функцию от имени другого объекта.

object1.fun.call(object2, 'argument'); thisы функции object1.fun будут ссылаться на object2

**"use strict"** - отменяет this но только в нутри контекста

Глобальный контекст - window в браузере.

globalThis.var = x - задаёт клобальный контекст переменной

Контекст функций -

## Классы

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Наследование

Constructor - вызывается первым при создании экземпляра.
Если не делать конструктор в производном классе, он там всё равно и передаёт все аргументы в родительский. А если делать, то нужно явно вызвать `super(argument)`
Вызов методов в конст-ре: локальных `this.print()` или родительских `super.print()` - нужно понимать буквальнао, как функции, вызвывемые при создании `new Class()`.
Сам `super()` - уже вызовет все медоды из конструктора родительского класса.

Если в подклассе присутствует конструктор, он должен сначала вызвать super () перед тем, как использовать this. [MDN Sub classing with extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends)

Если в потомке метод с тем же именем, что и в предке - будет использован метод потомка.

### **Mixin** (примеси)

позволяют ввести методы в класс не наследуясь от класса. Возможно вызвать внутри метода потомка метод предка. **λ-mixins** - лямбда-примеси - примеси через лямбда(стрелочные) функции [VID](https://www.youtube.com/watch?v=h4m-SIw9nEg)

Примеси - это не стековый метод программирования - это всегда костыль и заплатка.

[Object.assign()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

## Ассинхронность

Промисы

Состояния промиса: pending, fulfilled, or rejected: в ожидании, завершён, отклонён.

[Продвинутая статья с разбором типичных ошибок](https://habr.com/ru/company/vk/blog/269465/). [А также правильные шаблоны](https://gist.github.com/nolanlawson/6ce81186421d2fa109a4).

Колбэки лишают нас возможности использовать инструкции **return** и **throw**.
Всегда использовать **return** внутри then или выдавать ошибку при помощи **throw**.
**Promise.resolve()**

## Изменение HTML работа с DOM

[LINK](https://learn.javascript.ru/modifying-document), [Все события](https://developer.mozilla.org/ru/docs/Web/Events),

**Обработчик событий: [VID](https://www.youtube.com/watch?v=H9XRtCjD3hA),**

let elem = document.getElementById('elem') //Получить доступ к эл-ту

let elements = document.querySelectorAll('ul > li:last-child') //Ко всем эл-там по условию из CSS-указателей

let h1Text = window.document.querySelector("h1").innerHTML //Принимает в переменную содержимое тега.

**Вывод:**

***document*.writeln(*elem*)** //Тупо вывести на страницу, сразу за тегом скрипта

alert(message) //Всплывающее окно алерта

***document***.getElementById('selector1').innerHTML = message

Среда разработки

Поставить WebStorm к нему поставить интерпретатор, например Node.Js

В WebStorm очень хорошая подсветка кода - вот прям интуитивная и помогает визуальному восприятию.

Работа с GIT

Проект - ToDo List. На Яваскрипте под Андроид.

Словарь

Конкатенация - объеднение строк

Фреймворки и библиотеки

**NPM** - Менеджер пакетов, входящий в состав Node.js С его помощью подключаются фреймворки. [Основные команды](https://habr.com/ru/post/133363/).

**NPM-GUI** - графический интерфейс для NPM: Install: cmd => npm install -g npm-gui; .

RUN cmd => npm-gui; Access at [http://localhost:13377/](http://localhost:13377/)

**npm list -g --depth=0** // -g - только глобальные пакеты // depth=0 = без под-пакетов

**yarn** - тоже установщик пакетов - ставится из под npm i -g yarn

[Bootstrap](https://getbootstrap.com/) - заготовки для сайтов: кнопки, менюшки, иконки.

Микро-фреймворки - для решения конкретных задач

Нагружают ли БОЛЬШИЕ фреймворки сервер или пользовательский ПК?

# Продвинутые концепции

## Модули

[MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules#%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B8_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%B0)   [Статья](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)   

Модули используют [strict mode](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode) автоматически.

**[Экспорт](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export)**

`export` перед `var`, `let`, `const`, функцией или классом. Только из верхней области видимости модуля - из вложенности нельзя экспортировать.

`export { name, draw, reportArea, reportPerimeter };` экспортировать скопом.
`export {***data***}` - фигурные скобки обязательны.

**Импорт**

`import { name, draw, reportArea, reportPerimeter } from './modules/square.js';`

`./` - относительный путь из текущей папки, но можно и абсолютный от корня сайта

Импортированные объекты(функции и переменные) доступны как будто они прямо в этом файле, но только на чтение, как переменные объявленные через `const`. 
Но есть одна особенность - они импортируются как live bindings и их можно менять из модуля из которого они были экспортированы. [Подробней...](https://javascript.plainenglish.io/live-bindings-difference-between-export-default-and-export-as-default-4541c354cdaa)

[**Экпорт по умолчанию**](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules#%D1%8D%D0%BA%D0%BF%D0%BE%D1%80%D1%82_%D0%BF%D0%BE_%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2_%D0%B8%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D0%B3%D0%BE_%D1%8D%D0%BA%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0)

По умолчанию можно эеспортировать безымянные функции и выражения.
`export default function(ctx) {...}; import {default as randomSquare} from 'x.js';`

`export default function (…) { … }`  - можно не указывать имя функции.

Для каждого модуля разрешен только один экспорт по умолчанию.

`export default randomSquare` - фигурные скобки не нужны.
`export default function(ctx) { ... }` - безымянная функция.
`import randomSquare from './square.js';`  - а импортируем уже под именем!

**Переименование** 

`export { function1 as newFunctionName }`  и `import { newFunctionName } ...`
`export { function1 }`  и `import { function1 as newFunctionName} ...`
`import * as Module from './'`  и `Module.function1(); Module.function2()`

**Экспорт/импорт класса**

`class Square {...}; export { Square };`  
`import { Square }from './'` `let square1 = new Square(**...**)`

**Модуль - сборщик модулей**

shapes.js - сразу экспортирует то, что импортирует
 `export { Square } from './shapes/square.js';
 export { Triangle } from './shapes/triangle.js';
 export { Circle } from './shapes/circle.js';`

[Динамический импорт модулей](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules#%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0_%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%D0%B9)

 ****`import('./modules/myModule.js') .then((module) => {...});`

## Generators - функции-генераторы

[VID](https://youtu.be/DG9rXV1kI0o?t=479) Могут возвращать значения несколько раз, а не один.

Синтаксис: `function*` - просто добавляется звёздочка.
Вместо `return` - `yield 1; yield 2; yield 3;` 
Функция возвращает генератор - кладём его в переменную: `generator = someFunc();`   `generator.next(val)` - вызывает следующий  `yield` 
Каждый вызов `.next`  возвращает `val` и выполняет код между двумя `yield`.

Логика работы `function*` + `yield`  аналогична `async`  + `await`

## Proxies - прокси-объекты [VID](https://youtu.be/np08WdS9OXg)

Позволяют навешивать доп. функционал и логику на обращение к полям объекта.
Похоже на [геттеры и сеттеры](https://www.notion.so/JS-2182ad580e164918a294ec6e4f637004) в объектах.
Есть куча методов на которые можно навешивать: get, set, has  - наличие ключа, deleteProperty(target, prop) 

```jsx
person = {...}
op = new Proxy(person, {
	get(target, prop) { return target[prop] }
} 
// Обратимся к op.field - как-будто мы обращаемся к person
// Будет выполнен код в {} метода get
// Target будет == объекту person
// prop будет == имени вызванного ключа - field 
```

Но можно проксировать также функции и классы!

## Хэширование

[Общее объяснение](https://www.youtube.com/watch?v=rVr1y32fDI0). 
Да-да - это тот самый хэш, которым поверяют файлики, тот самый хэш который в виде набора кракозябр прописывается в ключи, добавляется к адресной строке и пр. и пр.
Но вопрос в том - как и где его можно использовать!

Важно понимать - хэш - это не просто набор символов для уникального ID или других целей. Хэш - это всегда закодированное нечто. Нет - из хэша нельзя восстановить сами данные - но по нему можно однозначно сопоставить - данные, определить идентичность. Т.е. одинаковых данных пропущеных через одну и ту же хэш-функцию всегда будет один и тот же хэш.

На самом деле.... на самом деле это не так. Хэш не совсем детерменирован, хэш - не всегда уникален, и это проблема. Два различных набора данных, так может случиться, будут иметь одинаковый хэш и, конечно же, перепутаются. Есть способы борьбы с этим, но довольно не изящные. 

Так зачем он такой корявый нужен?  А вот в этом вся соль! 
Хэш это мощнейший инструмент обеспечения произвольного доступа к данным - это значит быстрый поиск, быстрая запись, быстрое чтение. Хэш короче, чем сами данные, может быть выражен целым числом - но это не основная причина ускорения. Единожды прохешировав данные - мы получаем карту доступа к данным и можем получить моментальный к ним доступ по соответствующему ключу.

Хэш таблица\карта hash map - это способ проиндексировать непроиндексированное - чтобы обеспечить произвольный (быстрый) доступ к элементам некой совокупности.

Хэш-карта- это массив(или список или ещё что-то) + хэш-функция. Функция - индексирует ключи - кладёт ключ под определённый индекс. Хэш-функция кладёт элементы под индексы по определённому в ней принципу, по определённой системе и поэтому по индексу хэш-функция точно знает - с какой полки взять нужный пирожок.

## Service Worker

[MDN](https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers)   [StackOverflow](https://stackoverflow.com/questions/47953732/what-does-registerserviceworker-do-in-react-js)   

Средство для ускорения работы web-приложений, для кэширования и работы приложений в условиях нестабильного интернет-соединения и вообще Offline.

## Event Loop, микро и макрозадачи, Web Workers

[https://learn.javascript.ru/event-loop](https://learn.javascript.ru/event-loop)

## Serialization - сериализация

В контексте Redux Store - чтобы объект состоянея НЕ стал НЕ сериализуемым в нём просто не должно быть: функций, Promise, Symbol и др. знач., не являющихся простыми JS-данными.
В контексте Javascript - сериализация, это преобразование данных из формата читаемого одной системой и/или - человеко-читаемого формата в формат читаемый другой системой. Чаще всего речь идёт о преобразовании в JSON и обратно (это уже десериалиизация).
Сериализация становится необходимой, например потому, что при работе в приложении данные могут иметь структуру, которую “не понимает” формат хранения данных и перед тем как сохратить данные их придётся преобразовать = сериализовать.