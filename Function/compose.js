const compose = (func1, func2) => (num) => func1(func2(num));

export default compose;
