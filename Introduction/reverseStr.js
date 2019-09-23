const reverseRec = (str) => {
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverseRec(str.slice(0, str.length - 1));
};


const reverseWhile = (str) => {
  let reverseStr = '';
  let index = str.length - 1;
  while (index >= 0) {
    reverseStr += str[index];
    index -= 1;
  }

  return reverseStr;
};

export default reverseWhile;
