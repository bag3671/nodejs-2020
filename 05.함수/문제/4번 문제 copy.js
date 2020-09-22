let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 1; i <= 1000; i++) {
  if (i < 10) {
    a[i]++;
  }
  else if (i < 100) {

    a[i / 10]++;
    a[i % 10]++;
  }
  /* else if (i < 1000) {

    a[i / 100]++;
    a[i % 100]++;

  }  */
  else {

  }
}
console.log(a);