import { /* eslint-disable */
  l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
} from '@hexlet/pairs-data';

import {
  is, hasChildren, children, filter, reduce, toString as htmlToString,
} from '@hexlet/html-tags'; /* eslint-enable */

// BEGIN (write your solution here)
export const helper = (element, acc) => {
  if (hasChildren(element)) {
    return consList(acc, select(tagName, children(element)));
  }
  if (is(tagName, element)) {
    return acc;
  }
};

export const select = (tagName, list) => reduce(helper, l(), list);

// END
