const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
};

export default diff;
