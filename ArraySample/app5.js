const prices = [10, 5, 3, 6];
const tax = 2;
const taxAdjustedPricesWithForLoop = [];
const taxAdjustedPricesWithForEachLoop = [];

 for (const price of prices) {
   taxAdjustedPricesWithForLoop.push(price * tax);
 }

prices.forEach((price, idx, prices) => {
  const priceObj = price * tax ;
  taxAdjustedPricesWithForEachLoop.push(priceObj);
});

console.log('taxAdjustedPricesWithForLoop is ' , taxAdjustedPricesWithForLoop);
console.log('taxAdjustedPricesWithForEachLoop is ', taxAdjustedPricesWithForEachLoop);


const taxAdjustedPricesWithMap = prices.map((price, idx, prices) => {
  const priceObj = price * tax ;
  return priceObj;
});

console.log('taxAdjustedPricesWithMap is ', taxAdjustedPricesWithMap);