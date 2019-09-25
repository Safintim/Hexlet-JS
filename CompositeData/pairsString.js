export const length = str => str.length;

export const cons = (a, b) => `${a}\0${b}`;
export const car = (pair, start = 0, acc = '') => {
  if (pair[start] === '\0') {
    return acc;
  }
  return car(pair, start + 1, `${acc}${pair[start]}`);
};

export const cdr = (pair, start = length(pair) - 1, acc = '') => {
  if (pair[start] === '\0') {
    return acc;
  }
  return cdr(pair, start - 1, `${pair[start]}${acc}`);
};


// решение учителя

const separator = '\0';

const getSeparatorPosition = (str) => {
  const iter = (i) => (str[i] === separator ? i : iter(i + 1));

  return iter(0);
};

const getValue = (pair, start, end) => {
  const iter = (acc, i) => {
    if (i >= end) {
      return acc;
    }
    return iter(`${acc}${pair[start]}`, i + 1);
  };
  return iter('', start);
};

const cons = (str1, str2) => `${str1}${separator}${str2}`;
const car = (pair) => getValue(pair, 0, getSeparatorPosition(pair));
const cdr = (pair) => getValue(pair, getSeparatorPosition(pair), length(pair));