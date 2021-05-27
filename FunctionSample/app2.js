

const sumUp = (a, b, ...numbers) => {
	// console.log('Inside sumUp Function');
  const validateNumber = (number) => {
	// console.log('Inside validateNumber Function');  
    let finalnum = isNaN(number) ? 0 : number;
	console.log(`the value of finalnum is ${finalnum}`) ;
	return finalnum;
  };

  let sum = 0;
  for (const num of numbers) {
	 console.log(`the value of num is ${num}`) ;
    sum += validateNumber(num);
  }
  return sum;
};



console.log(sumUp(1, 5, 'fdsa', -3, 6, 10));
