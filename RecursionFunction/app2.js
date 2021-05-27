


function powerOf(amount, power) {	
	return power === 1 ? amount : amount * powerOf(amount, power - 1);
}

console.log('powerOf(3, 4) :- ' +powerOf(3, 4));


