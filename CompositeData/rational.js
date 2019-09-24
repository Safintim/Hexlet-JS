// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

export const make = (numer, denom) => cons(numer, denom);
export const numer = (n) => car(n);
export const denom = (n) => cdr(n);
export const toString = (n) => `${numer(n)} / ${denom(n)}`;
export const isEqual = (n1, n2) => numer(n1) * denom(n2) === numer(n2) * denom(n1);
export const add = (n1, n2) => make(numer(n1) * denom(n2) + numer(n2) * denom(n1), denom(n1) * denom(n2));
export const sub = (n1, n2) => make(numer(n1) * denom(n2) - numer(n2) * denom(n1), denom(n1) * denom(n2));
export const mul = (n1, n2) => make(numer(n1) * numer(n2), denom(n1) * denom(n2));
export const div = (n1, n2) => make(numer(n1) * denom(n2), denom(n1) * numer(n2));
