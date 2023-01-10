function DecToHec_OneNumber(num) {
  // 2진수로 바꾸로 1의 개수를 알려주는 함수
  let n = 0;
  let hex = num.toString(2);
  for (let i = 0; i < hex.length; i++) {
    if (hex[i] == 1) {
      n += 1;
    }
  }
  return n;
}

function solution(n) {
  let firstNumber = DecToHec_OneNumber(n);
  let numb = n + 1;
  while (true) {
    if (firstNumber == DecToHec_OneNumber(numb)) {
      console.log(numb);
      return numb; // 1의 개수가 같으면서 가장 낮을 수를 찾으면 return
    }
    numb++;
  }
}

solution(78);
