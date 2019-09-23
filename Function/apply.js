const apply = (count, func, arg) => (
  count <= 0 ? arg : apply(count - 1, func, func(arg))
);

export default apply;
