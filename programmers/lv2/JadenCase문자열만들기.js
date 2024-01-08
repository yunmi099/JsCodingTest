const solution = (s) => {
  let arr = s.split(" ");
  arr = arr.map((item) => {
    let copyItem = item;
    if (item !== "") {
      copyItem = copyItem.toLowerCase();
      copyItem = copyItem.replace(
        [...copyItem][0],
        [...copyItem][0].toUpperCase()
      );
    }
    return copyItem;
  });
  return arr.join(" ");
};
console.log(solution("for  the last week"));
