const fizzBuzz = (begin, end) => {
  while (begin <= end) {
    if (begin % 3 === 0 && begin % 5 === 0) {
      console.log('FizzBuzz');
    } else if (begin % 3 === 0) {
      console.log('Fizz');
    } else if (begin % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(begin);
    }
    begin += 1;
  }
};

export default fizzBuzz;