function solution(n) {
  var Array = [];
  Array[0] = 0;
  Array[1] = 1;
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      Array[i] = (Array[i - 2] + Array[i - 1]) % 1234567;
    }
  }
  return Array[n];
}

// 꼭 1234567로 나누어야 한다. 자세한 설명은 노션
