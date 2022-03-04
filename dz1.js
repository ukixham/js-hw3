// Первое задание (Возведение в степень)

var chislo = prompt("Введите число","");
var stepen = prompt("Введите степень","");
var result = 1;
var i = 0;

while(i < stepen)
{
 result= result*chislo;
 i++;
}

console.log(result);