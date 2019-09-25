export const cons = (a, b) => 2 ** a * 3 ** b;

export const getValue = (number, base) => {
  const factor = (acc, i) => {
    
    if (number < i) return acc;
    if (number % i === 0) return factor(acc + 1, i * base);
    return factor(acc, i * base);
  };
  return factor(0, base);
};


export const car = (pair) => getValue(pair, 2);
export const cdr = (pair) => getValue(pair, 3);


// решение учителя

export const factor = (value, base) => {
  if (value % base !== 0) return 0;
  return 1 + factor(value, value / base);
};
