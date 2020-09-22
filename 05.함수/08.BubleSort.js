function sort(array) {
  let newArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (array[k] > array[k + 1]) {
        let tmp = array[k];
        array[k] = array[k + 1];
        array[k + 1] = tmp;
      }
    }
  }
}

let smaples = [9, 5, 13, 6, 2];
sort(smaples);
console.log(smaples);
let cars = ["saab", "volvo", "BMW"];
// 맨 마지막 엘리먼트
fruits = ["Banana", "Orange", "Apple", "Mango"];
let last = fruits[fruits.length - 1];
console.log(fruits[fruits.length - 1]);

let html = ``;
html += '<ul>\n';
for (let fruit of fruits) {
  html += `<li>` + fruit + `<li>\n`;
}
html += `</ul>\n`
console.log(html);

fruits[fruits.length] = `cherry`;
console.log(fruits.join(`,`));

let popItem = fruits.pop();
console.log(popItem.fruits);

let shiftItem = fruits.shift();
console.log(shiftItem.fruits);

fruits.unshift(`lemon`)
console.log(fruits);

delete fruits[0];
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
let spliceItem = fruits.splice(2, 1);
console.log(spliceItem, fruits);

console.log(cars.concat(fruits + cars));

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(2);
console.log(citrus);
citrus = fruits.slice(1, 3);
console.log(citrus);

console.log(fruits.toString());

fruits.forEach(function (value, index){
  console.log(index, value);
})