
function createTaxCalculator(tax) {
	function calculateTax(amount) {
	return amount * tax;
	}
	return calculateTax;
}


const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTax = createTaxCalculator(0.29);

const vatAmount = calculateVatAmount(100);
const incomeTax = calculateIncomeTax(200);

console.log('vatAmount :-',vatAmount);
console.log('incomeTax :-',incomeTax);