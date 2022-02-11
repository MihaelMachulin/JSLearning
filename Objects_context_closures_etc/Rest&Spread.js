// Короче вот - некая форма в HTML из которой мы подтягиваем поля и кладём их в объект с помощью функции
// И КАЖДЫЙ РАЗ когда мы добавляем поле в форму - нам нужно добавлять его в каждый блок кода - в 3 места

const form = document.querySelector('form')

form.addEventListener('submit', event => {

    event.preventDefault()

    const title = form.title.value
    const text = form.text2.value
    const description = form.description.value

    saveForm({title, text, description})
})

// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title: data.title,
//         text: data.text,
//         description: data.description
//     }
//     console.log('Form data:', formData)
// }

// Вариант с деструктуризацией
// function saveForm(data) {
//     const {title, text, description} = data   // Я по-прежнему не понимаю до конца, что тут происходит?
//     const formData = {                        // Если совсем по-тупому - это то же самое, что перед каждой
//         date: new Date().toLocaleDateString(),// переменной написать data.
//         title, text, description   // или - понимаю - здесь просто ключи совпадают со значениями
//     }
//     console.log('Form data:', formData)
// }

// Вариант с деструктуризацией прямо в аргументах
// function saveForm ({title, text, description}) { // Типа - тут мы принимаем сразу объект в качестве аргумента
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     }
//     console.log('Form data:', formData)
// }

// И наконец - то, ради чего всё затевалось - оператор ... spread
function saveForm (data) { // Принимаем произвольную дату
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data   // Кагбе - разворачиваем массив аргументов в переменные
    }
    console.log('Form data:', formData)
} // Единственный смысл spread - это развернуть что-то перечислимое на отдельные переменные

// А вот, разрешите представить, оператор Rest - записывается также - троеточием
// Но служит наоборот - для сбора всех параметров в массив
// Но только отправлиять аргументы нужно уже не как объект saveForm(title, text, description)
// function saveForm (...args) {
//     const [title, text, description] = args  // Получили массив, и деструктурировали
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     }
//     console.log('Form data:', formData)
// }