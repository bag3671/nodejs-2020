//배열(Array)
let arrayPersonInfo = [`홍길동`, `남자`, 29];
console.log(arrayPersonInfo[0], arrayPersonInfo[1], arrayPersonInfo[2]);

//객체(Object) - key. value 쌍으로 구성
let personInfo = {
  'name': '홍길동',
  'gender': '남자',
  'age': 29
}
let g = `gender`
console.log(personInfo[`name`], personInfo[g], personInfo[`a` + `ge`]);

let person = {
  name: `홍길동`, gender: `남자`, age: 29
}
console.log(person.name, person.gender, person.age);
console.log(person.gender);
console.log(process.env.JAVA_HOME);