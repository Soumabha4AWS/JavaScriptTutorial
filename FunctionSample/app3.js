

const sumUp = (callBack, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  callBack(sum);
};



const showResult = (result) => {
  alert('The result after adding all numbers is: ' + result);
};

sumUp(showResult, 1, 5, 'fdsa', -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
