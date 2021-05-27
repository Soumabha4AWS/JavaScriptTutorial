/************************** Sorting Array ************************/

const names = ['Shubham','Gaurav','Manish','Rahul','Nilesh'];

console.log('names is in forward direction ',names.sort());
console.log('names is in reverse direction ',names.reverse());


const prices = [10.99, 5.99, 3.99, 6.59];

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

console.log('sortedPrices is in forward direction ',sortedPrices);
console.log('sortedPrices is in reverse direction ',sortedPrices.reverse());


/************************** Filtered Array ************************/

const filteredPrices = prices.filter((price, indx, prices) => {
    return price > 6;
});

console.log('filteredPrices is  ',filteredPrices);

const unfilteredPrices = prices.filter((price) => {
    return price < 6;
});

console.log('unfilteredPrices is  ',unfilteredPrices);


const shortUnfilteredPrices = prices.filter(price => price < 6);

console.log('shortUnfilteredPrices is  ',unfilteredPrices);




/************************** Reducing Array ************************/

let sum = 0;

prices.forEach((price) => {
	sum += price
});

console.log('Sum from a forEach Function is ', sum);

sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log('Sum from a reduce Function is ', sum);