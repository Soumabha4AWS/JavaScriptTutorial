try {
	throw {message : 'Excpeption Thrown'}
}
catch (error) {
	console.log('Caught Exception is',error);
}
finally {
	console.log('Exception was handled successfully');
}
