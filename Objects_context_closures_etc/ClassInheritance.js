// Зесь у нас полностью показан принцип наследования
// RootElement <= Box <= instances
// От класса RootElement будет наследоваться класс Box, а от него будут засовываться в DIV конкретные инстансы
// this.$el. - вот это не понятно - откуда оно берётся и как классы\подклассы с этим общаются

class  RootElement {
    constructor(tagName = 'div') {   // Инициализирующий метод класса. Этот метод определяет аргументы,
                                    //  которые принимает класс.
        this.$el = document.createElement(tagName) // Здесь тег СОЗДАЁТСЯ  а ниже...
        this.$el.style.marginBottom = '20px'
    }
    // Методы сокрытия\отображения элемента
    hide() {  this.$el.style.opacity = '0' }; show() {  this.$el.style.opacity = '1' }
    // Метод вывода в HTML // А тут - он уже конкретно вставляется куда сказано
    append() {document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)}
}

class Box extends RootElement { // Задаём класс Box, наследованием (extends) от RootElement
    constructor(color, size = 150, tagName) { // конструктор - принимает значения
        super(tagName) // Вызываем конструктор родительского класса иначе мы не получим доступ к его переменным
        this.color = color
        this.size = size
    }
    create() {
        this.$el.style.background = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px` // Равенство сторон и размер из переменной
        this.append() // Обращаемся в родительский класс для вставки элемента в HTML
        return this // Без ретёрна в переменную ничегоне прилетит
    }
}
// Создаём экземпляры Boxа
const redBox = new Box('red', 100, 'p').create() // new мы создаём экземпляр Boxа и вызываем его метод .create()
const blueBox = new Box('blue').create()

class Circle extends RootElement {
    constructor(color) { // Круг принимает только цвет
        super();         // Из RootElement у нас берётся DIV по-умолчанию
        this.color = color
    }
    create() {
        this.$el.style.borderRadius = '50%' // Тут мы уже для круга применяем стили круглоты
        this.$el.style.width = this.$el.style.height = '120px' // Размер - фиксированный
        this.$el.style.background = this.color
        this.append() // Метод RootElement для рендера в страницу
        return this
    }
}


const circle = new Circle('green').create()

circle.$el.addEventListener('mouseenter', () => {circle.hide()})
circle.$el.addEventListener('mouseleave', () => {circle.show()})