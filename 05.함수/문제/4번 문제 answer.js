let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//한자리 수
for (i = 1; i <= 9; i++) {
  counts[i]++;
}
//두자리 수
for (i = 10; i <= 99; i++) {
  counts[parseInt(i / 10)]++; //십의 자릿수
  counts[i % 10]++;//일의 자리
}
//세자리 수
for (i = 100; i <= 999; i++) {
  counts[parseInt(i / 100)]++; //백의 자릿수
  counts[parseInt((i % 100) / 10)]++;  //십의 자릿수
  counts[i % 10]++;//일의 자리
}
//네자리 수
for (i = 1000; i <= 1000; i++) {
  counts[parseInt(i / 1000)]++; //천의자리수
  counts[parseInt((i % 1000) / 100)]++; //백의자리수
  counts[parseInt((i % 1000 % 100) / 10)]++;  //십의 자릿수
  counts[i % 10]++;//일의 자리
}
console.log(counts);
