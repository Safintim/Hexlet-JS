const areBracketsBalanced = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (count < 0) {
      return false;
    }
    count = str[i] === '(' ? count += 1 : count -= 1;
  }
  return count === 0;
};

export default areBracketsBalanced;
