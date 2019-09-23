const normalizeStartIndex = (startIndex) => (startIndex < 0 ? 0 : startIndex);

const getLengthSubStr = (str, startIndex, endIndex) => {
  if (endIndex < 0) return 1;
  if (startIndex + endIndex - 1 >= str.length - 1) return str.length;
  return endIndex;
};

const substr = (str, start = 0, end = str.length) => {
  if (start >= str.length || end === 0) return '';
  const startIndex = normalizeStartIndex(start);
  const lengthSubStr = getLengthSubStr(str, start, end);
  let newStr = '';
  for (let i = 0; i < lengthSubStr && startIndex + i < str.length; i += 1) {
    newStr += str[startIndex + i];
  }
  return newStr;
};


export default (str, index = 0, substrLength = str.length) => {
  if (index >= str.length) {
    return '';
  }

  const currentIndex = index < 0 ? 0 : index;
  let lastIndex = currentIndex + (substrLength - 1);

  if (substrLength < 0) {
    lastIndex = currentIndex;
  } else if (lastIndex > str.length - 1) {
    lastIndex = str.length - 1;
  }
  let result = '';
  for (let i = currentIndex; i <= lastIndex; i += 1) {
    result = `${result}${str[i]}`;
  }

  return result;
};
