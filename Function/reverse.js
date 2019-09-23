export default (str) => {
  const lastIndex = str.length - 1;
  const iter = (currentIndex, acc) => {
    if (currentIndex > lastIndex) return acc;
    return iter(currentIndex + 1, `${str[currentIndex]}${acc}`);
  };
  return iter(0, '');
};
