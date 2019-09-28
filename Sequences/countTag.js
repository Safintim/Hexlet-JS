import { /* eslint-disable */
  l, length, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
} from '@hexlet/pairs-data';

import {
  is, hasChildren, children, filter, reduce, toString as htmlToString,
} from '@hexlet/html-tags'; /* eslint-enable */

// BEGIN (write your solution here)
const select = (tagName, list) => reduce((element, acc) => {
  if (is(tagName, element)) {
    acc = consList(element, acc);
  }
  if (hasChildren(element)) {
    return concat(acc, select(tagName, children(element)));
  }
  return acc;
}, l(), list);

export default select;
// END


// решение учителя

const select = (tagName, list) => reduce((element, acc => {
  const acc2 = hasChildren(element) ? concat(acc, select(tagName, children(element))) : acc
  return (is(tagName, element) ? consList(element, acc) : acc2;
}), l(), list);