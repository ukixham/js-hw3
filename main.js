// Циклы - для многократного использования одного участка кода для этого и существуют циклы

// ++ - делает прибавку на 1 Пример: 5++ = 5 + 1
// -- - отнимает 1 Пример: 5-- = 5 - 1

// var i = 0;

// console.log(i);
// console.log(++i); // префикс способ вывода сначала прибавляет а потом выводит значение
// console.log(i++); // постфикс способ вывода сначала выводит а потом прибавляет
// console.log(i++);
// console.log(++i);


// while 

// var i = 0;

// while(i < 10) {
//     console.log(i);
//     i++
// }

// Цикл будет выполняться до тех пор пока условие не выполнится (итератор не достигнет 10)


// var i = 0;

// do {
//     console.log(i);
//     i++
// }while(i < 10)

// do while - сперва что то делает а потом делает проверку

// do {
//     var x = +prompt('Введите число');
// }while(isNaN(x) || x != 0 ) {
//     console.log('Доступ разрешен');
// }


// for(начало;условие;шаг)
// let - способ объявления локальной переменной и она не выходит за пределы видемости фигурных скобок


// for(let i = 0;i < 100;i++) {
//     if( i %3 == 0) {
//         console.log(i);
//     }
// }


// for(let i = 0; i < 20;i++) {
//     if(i >= 5) {
//         console.log(i);
//     }else {
//         console.log('Hello');
//     }
// }


// let num = +prompt('Введите число');

// num = !isNaN(num) ? num: 100;

// if(!isNaN(num)) {
//     num = num;
// }else {
//     num = 100
// }

// console.log(num);


// let sum = 1;

// for(let i = 1; i < 10;i++) {
//     sum = sum * i
// }
// console.log(sum);

// Первое задание (Возведение в степень)

// var chislo = prompt("Введите число","");
// var stepen = prompt("Введите степень","");
// var result = 1;
// var i = 0;

// while(i < stepen)
// {
//  result= result*chislo;
//  i++;
// }

// console.log(result);

// Второе задание (Лестница)

// var kol = prompt("Введите количество ступенек")
// var sim = prompt("Введите символы ступенек")
// var kon = prompt("Введите конечный символ")

// for (let i = 0; i < kol; i++) {
//     let line = ''
//     for(let j = 0; j < i; j++) {
//         line += sim
//     }
//     console.log(line + '' + kon);
// }
  