    //    Упражнения из книги "Eloquent JAVASCRIPT"        \\
   //     Глава #2 "Структура программ"                     \\
  //      https://habr.com/ru/post/240225/                   \\


// Упражнение №1 "Треугольник в цикле"


/* Упражнение №2 "FizzBuzz"
   Проверка делится ли чисто без остатка на 3 и на 5 */
{
  let count = 1;
  while (count < 100){
    if (count%3==0 && count%5==0) console.log("FizzBuzz");
    else if (count%3==0) console.log("Fizz");
    else if (count%5==0) console.log("Buzz");
    else console.log(count);
    count++;
  }
}



// Упражнение №3 "Шахматная доска"
{
  let count=1, trig=1, countLenth=1, stroka="";
  while (count<=100){
    stroka = stroka + "# ";
    if (countLenth==10 && trig==1) { stroka = stroka + "\n "; countLenth = 0; trig=0;}
    else if (countLenth==10) { stroka = stroka + "\n"; countLenth = 0; trig=1;}
    count++; countLenth++;
  }
  console.log(stroka);
}

