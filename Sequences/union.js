// eslint-disable-next-line
import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const addElement = (element, list) => (has(list, element) ? list : cons(element, list));
const union = (l1, l2) => {
  const uniqueElements = reduce((element, acc) => addElement(element, acc), l(), l1);
  return reverse(reduce((element, acc) => addElement(element, acc), uniqueElements, l2));
};
export default union;
// END
