class Foo {
  constructor() {
    this.id = 'foo'
    this.print()
  }
  print() { console.log('foo' + this.id)}
}

class Bar extends Foo {
  constructor() {
    super() // В Foo вызывается this.id='foo' и this.print(), но print() переназначен в Bar и this указывает на него
    // Это можно понять, если мысленно наложить конструктор Foo на класс Bar. Тогда получается, что мы переназначаем id и вызываем this this.print() у Bar
    this.id = 'bar' // Теперь this.id - переназначен
    this.print()   //  This указывает сюда же - на метод print() класса  Bar Вывод: barbar
    super.print() //   Здесь же мы явно обращаемся к методу родителя но this.id указывает на потомка и = 'bar'
  }
  print() {
    console.log('bar' + this.id) }
}

new Bar()