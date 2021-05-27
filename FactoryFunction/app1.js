


function calculateTax(amount, tax) {
	return amount * tax;
}

const vatAmount = calculateTax(100, 0.19);

const incomeTax = calculateTax(100, 0.29);

console.log('vatAmount :-',vatAmount);
console.log('incomeTax :-',incomeTax);