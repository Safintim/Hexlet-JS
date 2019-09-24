import { cons, car, cdr, toString } from '@hexlet/pairs';

const sumOfPairs = (p1, p2) => cons(car(p1) + car(p2), cdr(p1) + cdr(p2));

export default sumOfPairs;
