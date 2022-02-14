/* ===============================================
    Примеры использования коллекций ключ/значение
    Map, Set, WeakMap, WeakSet
    https://www.youtube.com/watch?v=mbcP3Oc0PjU
   =============================================== */


/* Пример использования коллекции Map
   Показано, как ключами элементов могут быть целые объекты */
const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'}
]

const visits = new Map()

visits
  .set(users[0], new Date()) // Кладём по ключу users[0] текущий момент времени
  .set(users[1], new Date(new Date().getTime() + 1000 * 60)) // Просто добавлено смещение по
  .set(users[2], new Date(new Date().getTime() + 5000 * 60)) // времени на несколько минут

function getVisit(user) {
  return visits.get(user)
}

// console.log(getVisit(users[0]))



/* Пример использования коллекции Set.
   Ключевая особенность Set в том, что
   эта коллекция не может содержать в
   себе повторяющихся значений         */
const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]) // Останется по одной тройке и пятёрке

set.add(10).add(20).add(30).add(20) // Последнее число 20 не будет добавлено

// Методы Set
// console.log(set)            // Содержимое коллекции
// console.log(set.has(42))    // false - коллекция не содержит число 42
// console.log(set.size)       // 9 - кол-во эл-тов в коллекции
// console.log(set.delete(1))  // удалить эл-т с интексом 1 - вернёт true
// console.log(set.size)       // 8 - кол-во эл-тов в коллекции
// console.log(set.clear())    // очистить коллекцию полностью - вернёт undefined
// console.log(set.size)       // 0 - кол-во эл-тов в коллекции

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// Убираем дубликаты из массива
// function uniqValues(array) { return [...new Set(array)]        }
function uniqValues(array) { return Array.from(new Set(array)) }
//console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 4, 5, 6, 6]))



/* Пример использования коллекции WeakMap.
   Ключами могут являться только объекты.
   Все методоы: get, set, delete, has
   Экономит память - потому, что позволяет
   GarbageCollectorу JS удалять удалённое   */

{
  let obj = {name: 'weakmap'}; const arr = [obj]; obj = null;
// console.log(obj) // null
// console.log(arr)  // [ { name: 'weakmap' } ]
// Удивительно, но в arr - остался объект со всем его содержимым
}
{
  let obj = {name: 'weakmap'}
  const map = new WeakMap([[obj, 'obj data']])
  obj = null; // obj - реально удалился из map - в этом особенность WeakMap
  // console.log(map.has(obj)) // false
}
{ // Пример кэширования с помощью WeakMap
  // при большом кол-ве хранимых объектов экономия памяти может быть значительной
  const cache = new WeakMap()

  function cacheUser(user) {
    if (!cache.has(user)) {
      cache.set(user, Date.now())
    }
    return cache.get(user)
  }
  let lena = {name: 'Elena'}
  let alex = {name: 'Alex'}

  cacheUser(lena)
  cacheUser(alex)
  lena = null

  //console.log(cache.has(lena))
  //console.log(cache.has(alex))
}

// WeakSet - как Set - только Weak - как WeakMap

{
  const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
  ]

  const visits = new WeakSet(users)
  visits.add(users[0], 'Designer')
  console.log(visits.has(users[2]))

}