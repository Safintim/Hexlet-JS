import { l, cons, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line

export const has = (list, element) => {
  if (isEmpty(list)) return false;
  if (head(list) === element) return true;
  return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (acc, elements) => {
    if (isEmpty(elements)) return acc;
    return iter(cons(head(elements), acc), tail(elements));
  };
  return iter(l(), list);
};

export const concat = (l1, l2) => {
  if (isEmpty(l1)) return l2;
  return cons(head(l1), concat(tail(l1), l2));
};
