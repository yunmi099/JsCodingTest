const solution = (n, words) => {
  let answer = [0, 0];
  let findDuplicate = new Set();
  if (words[0].length === 1) {
    return [1, 1];
  }
  for (let i = 1; i < words.length; i++) {
    findDuplicate.add(words[i - 1]);
    if (
      [...words[i - 1]].at(-1) !== [...words[i]].at(0) ||
      findDuplicate.has(words[i]) ||
      words[i].length === 1
    ) {
      (i + 1) % n === 0
        ? (answer = [n, Math.ceil((i + 1) / n)])
        : (answer = [(i + 1) % n, Math.ceil((i + 1) / n)]);
      break;
    }
  }
  return answer;
};
