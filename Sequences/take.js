// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const take = (n, list) => {
  if (isEmpty(list) || n === 0) return l();
  return cons(head(list), take(n - 1, tail(list)));
};

export default take;
// END
