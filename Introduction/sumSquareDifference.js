const sumSquareDifference = (n) => {
  let sumSquare = 0;
  let sumN = 0;
  for (let i = 1; i <= n; i += 1) {
    sumSquare += i ** 2;
    sumN += i;
  }
  return sumN ** 2 - sumSquare;
};

export default sumSquareDifference;
