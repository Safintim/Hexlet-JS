import {
  node, getValue, is, map, filter, reduce,
} from '@hexlet/html-tags';

import { wc } from './utils';

// BEGIN (write your solution here)
export const extractHeaders = (elements) => {
  const filtered = filter((element) => is('h2', element), elements);
  return map((element) => node('p', getValue(element)), filtered);
};

export const wordsCount = (tag, text, elements) => {
  const filtered = filter((element) => is(tag, element), elements);
  const mapped = map((element) => getValue(element), filtered);
  return reduce((element, acc) => wc(text, element) + acc, 0, mapped);
};
// END
