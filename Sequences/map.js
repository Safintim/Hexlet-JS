import {
  l, isEmpty, head, tail, cons, reverse,
} from '@hexlet/pairs-data';

import {
  getName, getValue, node, is,
} from '@hexlet/html-tags';

import { reverse as reverseStr } from './strings';

// BEGIN (write your solution here)
export const map = (func, list) => {
  const iter = (elements) => {
    if (isEmpty(elements)) return l();
    const newElement = func(head(elements));
    return cons(newElement, iter(tail(elements)));
  };
  return iter(list);
};

export const map = (func, list) => {
  const iter = (acc, elements) => {
    if (isEmpty(elements)) return reverse(acc);
    const newElement = func(head(elements));
    return iter(cons(newElement, acc), tail(elements))
  };
  return iter(l(), list);
};


export const mirror = (elements) => map((x) => node(getName(x), reverseStr(getValue(x))), elements);
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', getValue(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
