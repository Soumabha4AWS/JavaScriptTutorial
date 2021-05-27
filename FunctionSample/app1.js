

// not related to game



const sumUp1 = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

const sumUp2 = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};


const sumUp3 = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};


const sumUp4 = function() {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum;
};


console.log('Value of sumUp1 is ',sumUp1([1,2,3,4,5,6,7,8,9,10]));
console.log('Value of sumUp2 is ',sumUp2(1,2,3,4,5,6,7,8,9,10));
console.log('Value of sumUp3 is ',sumUp3(1,2,3,4,5,6,7,8,9,10));
console.log('Value of sumUp4 is ',sumUp4(1,2,3,4,5,6,7,8,9,10));