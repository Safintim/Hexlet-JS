const isPowerOfThree = (num) => {
  let currentResult = 1;
  for (let i = 0; currentResult < num; i += 1) {
    currentResult = 3 ** i;
  }
  return currentResult === num;
};

export default isPowerOfThree;
