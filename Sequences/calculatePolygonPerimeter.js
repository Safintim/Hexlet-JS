import { getX, getY } from '@hexlet/points';
// eslint-disable-next-line
import { isEmpty, head, tail, toString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const getDistanse = (p1, p2) => Math.sqrt((getX(p2) - getX(p1)) ** 2 + (getY(p2) - getY(p1)) ** 2);
const isThanLessThree = (list) => {
  const iter = (elements, acc) => {
    if (acc > 2) return false;
    if (isEmpty(elements)) return true;
    return iter(tail(elements), acc + 1);
  };
  return iter(list, 0);
};

const calculatePolygonPerimeter = (list) => {
  if (isThanLessThree(list)) return null;
  const startPoint = head(list);
  const iter = (elements, acc, prevPoint) => {
    if (isEmpty(elements)) return acc + getDistanse(prevPoint, startPoint);
    const currentPoint = head(elements);
    const distanse = prevPoint !== null ? getDistanse(prevPoint, currentPoint) : acc;
    return iter(tail(elements), acc + distanse, currentPoint);
  };
  return iter(list, 0, null);
};
export default calculatePolygonPerimeter;
// END


// решение учителя

const areThereLessThenThreePoints = (points) => {
  const iter = (list, acc) => {
    if (acc > 2) {
      return false;
    }

    if (isEmpty(list)) {
      return true;
    }

    return iter(tail(list), acc + 1);
  };

  return iter(points, 0);
};

const getSegmentLength = (point1, point2) => {
  const x1 = getX(point1);
  const x2 = getX(point2);
  const y1 = getY(point1);
  const y2 = getY(point2);

  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

export default (points) => {
  if (areThereLessThenThreePoints(points)) {
    return null;
  }

  const startPoint = head(points);
  const iter = (list) => {
    const currentPoint = head(list);
    const rest = tail(list);
    if (isEmpty(rest)) {
      return getSegmentLength(currentPoint, startPoint);
    }

    const nextPoint = head(rest);
    return getSegmentLength(currentPoint, nextPoint) + iter(rest);
  };

  return iter(points);
};