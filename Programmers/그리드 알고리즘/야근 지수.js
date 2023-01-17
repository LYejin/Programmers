// 내가 짠 코드 -> js 함수가 먹히지 않음 + 효율성 통과 못함
function solution(n, works) {
  var answer = 0;

  for (let i = 0; i < n; i++) {
    works.sort().reverse(); // 이것 때문에 테스트를 통과 못함
    works[0] -= works[0] > 0 ? 1 : 0;
  }

  for (let j = 0; j < works.length; j++) {
    answer += Math.pow(Number(works[j]), 2);
  }

  return answer;
}

solution(10, [5, 5, 3]);

// 률무차님 코드
function solution(n, works) {
  var answer = 0;

  works.sort((a, b) => b - a); // 내림차순

  let max = works[0]; // 최대값
  while (n > 0) {
    if (max === 0) return 0; // 일이 끝남

    for (let i = 0; i < works.length; i++) {
      if (max !== works[i] || n === 0) break;
      works[i]--;
      n--;
    }
    max--; // 최댓값 갱신
  }
  answer = works.reduce((p, c) => p + c * c, 0); // 모든 합

  return answer;
}
