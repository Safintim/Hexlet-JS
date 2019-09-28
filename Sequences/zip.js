import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (l1, l2) => {
  if (isEmpty(l1) || isEmpty(l2)) return l();
  const newElement = l(head(l1), head(l2));
  return cons(newElement, zip(tail(l1), tail(l2)));
};

export default zip;

// END

const zip = (l1, l2) => {
  const iter = (first, last, acc) => {
    if (isEmpty(first) || isEmpty(last)) return acc;
    const newElement = l(head(first), head(last));
    const newAcc = cons(newElement, acc);
    return iter(tail(first), tail(last), newAcc);
  };
  return reverse(iter(l1, l2, l()));
};

export default zip;