let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 1; i <= 1000; i++) {
  if (i < 10) {
    if (i == 0) {
      a[0] += 1;
    } else if (i == 1) {
      a[1] += 1;
    } else if (i == 2) {
      a[2] += 1;
    } else if (i == 3) {
      a[3] += 1;
    } else if (i == 4) {
      a[4] += 1;
    } else if (i == 5) {
      a[5] += 1;
    } else if (i == 6) {
      a[6] += 1;
    } else if (i == 7) {
      a[7] += 1;
    } else if (i == 8) {
      a[8] += 1;
    } else {
      a[9] += 1;
    }
  }
  else if (i < 100) {
    if (i % 10 === 0) {
      a[0] += 1;
    } else if (i % 10 === 1) {
      a[1] += 1;
    } else if (i % 10 === 2) {
      a[2] += 1;
    } else if (i % 10 === 3) {
      a[3] += 1;
    } else if (i % 10 === 4) {
      a[4] += 1;
    } else if (i % 10 === 5) {
      a[5] += 1;
    } else if (i % 10 === 6) {
      a[6] += 1;
    } else if (i % 10 === 7) {
      a[7] += 1;
    } else if (i % 10 === 8) {
      a[8] += 1;
    } else {
      a[9] += 1;
    }
    if (i/10==1) {
      a[1] += 1;
    } else if (i/10 === 1) {
      a[1] += 1;
    } else if (i/10 === 2) {
      a[2] += 1;
    } else if (i/10 === 3) {
      a[3] += 1;
    } else if (i/10 === 4) {
      a[4] += 1;
    } else if (i/10 === 5) {
      a[5] += 1;
    } else if (i/10 === 6) {
      a[6] += 1;
    } else if (i/10 === 7) {
      a[7] += 1;
    } else if (i/10 === 8) {
      a[8] += 1;
    } else {
      a[9] += 1;
    }
  }
}
console.log(a);