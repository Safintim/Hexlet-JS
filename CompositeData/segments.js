import {
    makePoint, getX, getY, toString as pointToString,
  } from '@hexlet/points';
import { cons, car, cdr } from '@hexlet/pairs';

const makeSegment = (point1, point2) => cons(point1, point2);

const startSegment = (segment) => car(segment);
const endSegment = (segment) => cdr(segment);
const segmentToString = (segment) => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
const midpointSegment = (segment) => {
  const x = (car(startSegment(segment)) + car(endSegment(segment))) / 2;
  const y = (cdr(startSegment(segment)) + cdr(endSegment(segment))) / 2;
  return makePoint(x, y);
};

export { makeSegment, startSegment, endSegment, segmentToString, midpointSegment };]
