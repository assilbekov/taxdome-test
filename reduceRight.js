function reduceRight(arr, callback, initAcc) {
  let startIndex = initAcc === undefined ? arr.length - 2 : arr.length - 1;
  let acc = initAcc ?? arr[arr.length - 1];

  for (let i = startIndex; i >= 0; i--) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}

const arr = ["a", "b", "c"];
const result = reduceRight(arr, (acc, value) => {
  return acc + value;
}, "");

console.log(result); // ‘cba’