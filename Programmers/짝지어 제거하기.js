function solution(s) {
  const stack = [];
  stack.push(s.charAt(0));
  for (var i = 1; i < s.length; i++) {
    s.charAt(i) != stack[stack.length - 1]
      ? stack.push(s.charAt(i))
      : stack.pop();
    if (stack.length < 0) {
      return 0;
    }
  }
  return stack.length === 0 ? 1 : 0;
}
