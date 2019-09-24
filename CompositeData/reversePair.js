import { cons, car, cdr, toString } from '@hexlet/pairs';

const reversePair = (pair) => cons(cdr(pair), car(pair));

export default reversePair;
