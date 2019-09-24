import { cons, car, cdr, toString, isPair } from '@hexlet/pairs';

const findPrimitiveBox = (pair) => {
  const first = car(pair);
  const second = cdr(pair);
  if (!isPair(first) && !isPair(second)) {
    return pair;
  }

  const next = isPair(first) ? first : second;
  return findPrimitiveBox(next);
};

export default findPrimitiveBox;
