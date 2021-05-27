
/*   Factory Function   */

const factoryFunc = function (newNum) {
	function newNumber(num) {
	return num * newNum;	
	}
	return newNumber; 	
};

var ffun = factoryFunc(5);

console.log(ffun(10));



