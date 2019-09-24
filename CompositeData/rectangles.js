// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '@hexlet/points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

const makeRectangle = (point, width, height) => cons(point, cons(width, height));
const getStartPoint = (rectangle) => car(rectangle);
const getWidth = (rectangle) => car(cdr(rectangle));
const getHeight = (rectangle) => cdr(cdr(rectangle));
const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);
const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));
const containsTheOrigin = (rectangle) => {
  const upperLeftPoint = getStartPoint(rectangle);
  const lowerRightPoint = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));
  return quadrant(upperLeftPoint) === 2 && quadrant(lowerRightPoint) === 4;
};

export { makeRectangle, getStartPoint, getWidth, getHeight, square, perimeter, containsTheOrigin };
