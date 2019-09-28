import {
  l, isEmpty, head, tail, cons, reverse,
} from '@hexlet/pairs-data';

import { getValue, is, map } from '@hexlet/html-tags';

// BEGIN (write your solution here)
export const filter = (func, list) => {
  const iter = (acc, elements) => {
    if (isEmpty(elements)) return reverse(acc);
    const element = head(elements)
    if (func(element)) {
      return iter(cons(element, acc), tail(elements));
    }
    return iter(acc, tail(elements));
  };
  return iter(l(), list);
};

export const quotes = (elements) => map((element) => getValue(element), filter((element) => is('blockquote', element), elements));
// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
