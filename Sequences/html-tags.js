// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';
// eslint-disable-next-line
import { reverse as reverseStr } from './strings';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (tag, content) => cons(tag, content);
export const getName = (element) => car(element);
export const getValue = (element) => cdr(element);

export const append = (list, element) => consList(element, list);
export const toString = (list) => {
  if (isEmpty(list)) return '';
  const current = head(list);
  const currentString = `<${getName(current)}>${getValue(current)}</${getName(current)}>`;
  return `${toString(tail(list))}${currentString}`;
};

// END
