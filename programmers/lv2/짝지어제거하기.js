const solution = (n) => {
  let origin_string = [...n];
  let l = n.length;
  let stack = [origin_string[0]];
  for (let i = 1; i < l; i++) {
    let current = origin_string[i];
    stack[stack.length - 1] === current ? stack.pop() : stack.push(current);
  }
  return stack.length > 0 ? 0 : 1;
};

console.log(solution("baabab"));
