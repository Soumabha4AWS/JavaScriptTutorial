


function powerOf(amount, power) {
	let result = 1;
	
	for (let i=0; i<power; i++) {
		result *=amount
	}	
	
	return result;
}

console.log('powerOf(3, 4) :- ' +powerOf(3, 4));


