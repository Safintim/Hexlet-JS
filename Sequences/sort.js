// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const sort = (list) => {
  if (isEmpty(list)) return l();
  const supportElement = head(list);
  const eq = filter((x) => x === supportElement, list);
  const lessSupportElement = filter((x) => x < supportElement, list);
  const moreSupportElement = filter((x) => x > supportElement, list);
  return concat(concat(sort(lessSupportElement), eq), sort(moreSupportElement));
};

export default sort;
// END

// решение учителя
const sort = (list) => {
  if (isEmpty(list)) {
    return l();
  }

  const divisor = head(list);
  const rest = tail(list);

  const left = filter(value => value <= divisor, rest);
  const right = filter(value => value > divisor, rest);

  return concat(sort(left), cons(divisor, sort(right)));
};

export default sort;
