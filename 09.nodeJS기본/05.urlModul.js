const url =require(`url`);

let urlSample = `https://www.hanbit.co.kr/store/books/look.php?p_code=B8945183661`
let parseObject = url.parse(urlSample)
console.log(parseObject);
console.log(parseObject.query);

console.log(url.format(parseObject));