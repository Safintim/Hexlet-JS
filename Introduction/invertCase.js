const invertCase = (str) => {
  let invertStr = '';
  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    invertStr += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return invertStr;
};

export default invertCase;