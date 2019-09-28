import { isEmpty, head, tail } from '@hexlet/pairs-data';
import { getValue, is } from '@hexlet/html-tags';

// BEGIN (write your solution here)
export const reduce = (func, startAcc, elements) => {
  const iter = (acc, items) => {
    if (isEmpty(items)) return acc;
    const newAcc = func(head(items), acc);
    return iter(newAcc, tail(items));
  };
  return iter(startAcc, elements);
};

export const reduce = (func, acc, elements) => {
  if (isEmpty(elements)) return acc;
  return reduce(func, func(head(elements), acc), tail(elements));
}

export const emptyTagsCount = (tag, elements) => {
  const func = (element, acc) => (is(tag, element) && getValue(element) === '' ? acc + 1 : acc);
  return reduce(func, 0, elements);
};
// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
