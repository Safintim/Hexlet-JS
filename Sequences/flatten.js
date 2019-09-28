import { l, reverse, toString as listToString, isList, cons, reduce, concat } from '@hexlet/pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
// l(1, 2, l(3, 5), l(l(4, 3), 2));
const flatten = (list) => {
  return reduce((element, acc) => {
    if (!isList(element)) return concat(acc, l(element));
    return concat(acc, flatten(element));
  },
  l(),
  list);
};

export default flatten;
// END
