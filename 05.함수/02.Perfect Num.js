// 완전수 구하기
// 약수 구하는 함수
let getDivosors = (num) => {
  let divArray = [];
  for (let k = 1; k < num; k++) {
    if (num % k === 0) {
      divArray.push(k);
    }
  }
  return divArray;
}
// Array 원소의 합을 계산해주는 함수
let sumArray = (arr) => {
  let sum = 0;
  for (let element of arr)
    sum += element;
  return sum;
}

for (i = 2; i < 10000; i++) {
  // 약수 구하기
  let array = getDivosors(i);
  // 약수의 합구하기
  let divSum = sumArray(array);
  // 숫자 비교하기
  if (i == sum) {
    console.log(i);
    console.log(array);
  }
}