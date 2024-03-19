// Задание: нужно написать функцию run которая будет выводить console log
// с текстом из поля name через время укананое в поле timeout
// Т.е мы запускаем run у нас через 3 секунды выводится first после
// этого еще через 5 секунд second и еще через 2 секунды third

const arr = [
  { name: 'first', timeout: 3000 },
  { name: 'second', timeout: 5000 },
  { name: 'third', timeout: 2000 }
]
const run = async (_arr) => {
  for (let i = 0; i < _arr.length; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(_arr[i].name);
        resolve();
      }, _arr[i].timeout);
    });
  }
}

run(arr);