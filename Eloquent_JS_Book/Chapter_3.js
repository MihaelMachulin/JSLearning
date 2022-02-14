     //    Упражнения из книги "Eloquent JAVASCRIPT"        \\
    //     Глава #3 "Функции"                                \\
   //      https://habr.com/ru/post/240349/                   \\


//Упражнение №3 "Считаем бобы" из главы "Функции" книги "Выразительный JavaScript"
{
  function countLet (str, ltr) {
      let num = 0
      for (let n=0; n < str.length; n++){
      if (str.charAt(n) == ltr) num++;
      }
      return num
  }
  console.log(countLet('Шла саша по шоссе и сосала сушку.', 'с'))
}

// Решение через рекурсию
{
  let num = 0; n =0;
  function countLet (str, ltr) {
    if (str.charAt(n) == ltr) {num++;n++; countLet(str, ltr);}
    else if (n < str.length) {n++;countLet(str, ltr);}
    //проверить через ? :
    return num
  }
  console.log(countLet('Шла саша по шоссе и сосала сушку.', 'с'))
}
