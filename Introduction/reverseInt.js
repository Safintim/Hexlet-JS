const reverseInt = (int) => {
  const str = int.toString();
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== '-') {
      newStr += str[i];
    }
  }

  if (int < 0) {
    return -Number(newStr);
  }
  return Number(newStr);
};
export default reverseInt;