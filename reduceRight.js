function reduceRight(arr, callback, initAcc) {
  if (arr.length === 0) {
    return initAcc;
  }

  let startIndex = arr.length - 1;
  let acc = initAcc;

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