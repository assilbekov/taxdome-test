Задача:
Необходимо реализовать функцию reduceRight. Семантика функции:
На вход подаются два или три параметра:
1) Массив данных
2) Предикат(callback)
3) Начальное значение(необязательно)
В процессе реализации нельзя использовать методы reduce и reverse

Пример:
```
function reduceRight (arr, callback, initAcc) {
    // your code here
}
const arr = [‘a’, ‘b’, ‘c’];
const result = reduceRight(arr, (acc, value) => {
    return acc + value;
}, ‘’);
console.log(result); // ‘cba’
```




// Задание: нужно написать функцию run которая будет выводить console log
// с текстом из поля name через время укананое в поле timeout
// Т.е мы запускаем run у нас через 3 секунды выводится first после
// этого еще через 5 секунд second и еще через 2 секунды third
```
const arr = [
  { name: 'first', timeout: 3000 },
  { name: 'second', timeout: 5000 },
  { name: 'third', timeout: 2000 }
]
const run = (_arr) => {
  // your code here
}
```
