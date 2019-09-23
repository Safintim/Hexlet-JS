const sumOfSquareDigits = (digits) => {
  const digitsToStr = digits.toString();
  let sum = 0;
  for (let i = 0; i < digitsToStr.length; i += 1) {
    sum += Number(digitsToStr[i]) ** 2;
  }
  return sum;
};

const isHappyNumber = (number) => {
  let count = 0;
  while (count < 10) {
    count += 1;
    number = sumOfSquareDigits(number);
  }
  return number === 1;
};

export default isHappyNumber;
