function solution(n, s) {
  var arr = [];
  var div = Math.floor(s / n);
  var rest = s % n;

  if (div === 0) {
    return [-1];
  }

  for (let i = 0; i < n; i++) {
    arr[i] = div;
  }

  for (let z = 0; z < rest; z++) {
    arr[z] += 1;
  }
  arr.sort();

  return arr;
}

solution(2, 1);
