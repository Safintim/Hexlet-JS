const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < Math.abs(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default isPrime;
