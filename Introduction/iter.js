const smallestDivisor = (num) => {
  // BEGIN (write your solution here)

  const f = (divisor) => {
    if (divisor > num / 2) {
      return num;
    }
    if (num % divisor === 0) {
      return divisor
    }
    return f(divisor + 1)
  }
  return f(2);
    // END
};

// console.log(smallestDivisor(121));

const smallestDivisor1 = (num) => {
  if (num <= 0) {
    return NaN;
  }
  let divisor = 2;
  while (num % divisor !== 0) {
    divisor++;
  }
  return divisor
};

console.log(smallestDivisor1(1));