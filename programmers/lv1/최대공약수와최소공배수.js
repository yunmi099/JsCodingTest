const solution = (n, m) => {
  let a = Number(n);
  let b = Number(m);
  while (b != 0) {
    let r = b;
    b = a % b;
    a = r;
  }
  return [a, Number(n) * (Number(m) / a)];
};
