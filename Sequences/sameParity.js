// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const getParityNumber = (number) => (number % 2 === 0 ? 2 : 3);

const sameParity = (list) => {
  if (isEmpty(list)) return l();
  const parityFirstElement = getParityNumber(head(list));
  return filter((x) => getParityNumber(x) === parityFirstElement, list);
};

export default sameParity;
// END

// решение учителя 
const isEven = num => num % 2 === 0;

export default (list) => {
  if (isEmpty(list)) {
    return l();
  }

  const firstItem = head(list);
  const firstItemParity = isEven(firstItem);

  return filter(value => isEven(value) === firstItemParity, list);
};