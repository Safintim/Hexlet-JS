
const True = (arg1) => () => arg1;
const False = () => (arg2) => arg2;
const If = (func) => (arg1) => (arg2) => func(arg1)(arg2);

export { True, False, If };
