function solution(s) {
  const stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      stack.push(s.charAt(i));
    } else if (s.charAt(i) == ")") {
      if (stack.length === 0) {
        // pop 시 stack이 이미 0 이라면 return false
        return false;
      }
      stack.pop();
    } else {
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
