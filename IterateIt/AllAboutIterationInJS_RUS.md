-=Beware! Raw version document!=-

Начну с громких и провокационных заявлений =)
Итерирование + условия - это и есть программирование.

Можете сразу пролеснуть до примеров в конце - их достаточно,
чтобы выбрать подходящий для вашего случая...

Для начала - коротко повторим содержание документации MDN =)
Нам оттуда понадобится чуть менее, чем всё.

### Циклы: 
- [for](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#%D1%86%D0%B8%D0%BA%D0%BB_for) 
`(let i = 0; i < 10 ; i++) { 😵‍💫 }` - ну, тут всё понятно 
- [do](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#%D1%86%D0%B8%D0%BA%D0%BB_do...while)
`{i += 1; console.log(i) } while (i < 5);` - проверка в конце
- [while](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#%D1%86%D0%B8%D0%BA%D0%BB_do...while)
`(true) { console.log("Hello, 🌍!") }` - пока в () тру
- А также - диковенная [label:](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#%D0%BC%D0%B5%D1%82%D0%BA%D0%B0_(label))
в сочетани с  [break label](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#break)
и [continue label](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#continue)

### Циклы-итераторы коллекций
- [for](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in)
`(variable in object) {...}` - в `variable` перебирает имена ключей объекта. Не рекомендован для массивов.
- [for](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of)
`(variable in object) {...}` - перебирает значения при ключе. Рекомендован для любых коллекций.

### Коллекции
- `fruits = ['Яблоко', 'Банан']` - старый добрый [массив](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
плюс дюжина его братьев для 8, 16 и 32х - битных значений.
- `car = {brand: 'Lada', year: 1998 }` - объект - неупорядоченная коллекция ключ:значение
- `map1 = new Map()` - упорядоченная коллекция ключ:значение [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- `mySet = new Set()` - упорядоченная коллекция ключ:уникальное значение [set](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)
- WeakMap и WeakSet - коллекции "с недержанием" - для оптимизации памяти. 
[Это видео](https://www.youtube.com/watch?v=mbcP3Oc0PjU) - 
неплохо раскрывает суть вопроса.

Методы: .map, .re
Проверка на наличие
Перебор - строк.
Перебор массивов.
Перебор объектов.

## Примеры
<details>
<summary style="font-size: large; font-weight: bold">
<a href="https://frontend-stuff.com/blog/how-to-loop-through-object-in-javascript/">
Перебор свойств объекта </a></summary>

```js
// Обычный цикл
for (let i = 0; i < Object.keys(person).length; i++)  { // Object.keys - массив ключей
  log(Object.values(person)[i])  } // Object.values - массив значений

for (const i in person) { log(person[i]) }  // В i - ключи
for (const i of Object.values(person)) { log(i) } // в i - значения

const entries = Object.entries(obj) // Массив массивов [key, value]
entries.forEach(([key, value]) => { console.log(`${key}: ${value}`) })

Object.keys(person).forEach((i) => log(person[i]))
Object.values(person).forEach((i) => log(i))

Object.getOwnPropertyNames(obj).forEach(key => { log(`${key} : ${obj[key]}`) })
```
</details>

<details>
<summary style="font-size: large; font-weight: bold">
<a href="https://frontend-stuff.com/blog/how-to-loop-through-object-in-javascript/">
Перебор свойств объекта </a></summary>

```js
// Обычный цикл
for (let i = 0; i < Object.keys(person).length; i++)  { // Object.keys - массив ключей
  log(Object.values(person)[i])  } // Object.values - массив значений

for (const i in person) { log(person[i]) }  // В i - ключи
for (const i of Object.values(person)) { log(i) } // в i - значения

const entries = Object.entries(obj) // Массив массивов [key, value]
entries.forEach(([key, value]) => { console.log(`${key}: ${value}`) })

Object.keys(person).forEach((i) => log(person[i]))
Object.values(person).forEach((i) => log(i))

Object.getOwnPropertyNames(obj).forEach(key => { log(`${key} : ${obj[key]}`) })
```
</details>