// Второе задание (Лестница)

var kol = prompt("Введите количество ступенек")
var sim = prompt("Введите символы ступенек")
var kon = prompt("Введите конечный символ")

for (let i = 0; i < kol; i++) {
    let line = ''
    for(let j = 0; j < i; j++) {
        line += sim
    }
    console.log(line + '' + kon);
}