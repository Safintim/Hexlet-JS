import { makePoint, getX, getY } from '@hexlet/points'; 

const getQuadrant = (point) => {
  if (getX(point) > 0 && getY(point) > 0) return 1;
  if (getX(point) < 0 && getY(point) > 0) return 2;
  if (getX(point) < 0 && getY(point) < 0) return 3;
  if (getX(point) > 0 && getY(point) < 0) return 4;
  return null;
};

const getSymmetricalPoint = (point) => makePoint(-getX(point), -getY(point));
const calculateDistance = (p1, p2) => Math.sqrt((getX(p2) - getX(p1)) ** 2 + (getY(p2) - getY(p1)) ** 2);

export { getQuadrant, getSymmetricalPoint, calculateDistance };
