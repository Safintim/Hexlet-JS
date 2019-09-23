const isHappyTicket = (str) => {
  const pastLengthStr = str.length / 2;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (i < pastLengthStr) {
      leftSum += Number(str[i]);
    } else {
      rightSum += Number(str[i]);
    }
  }
  return leftSum === rightSum;
};

export default isHappy;
