function Person() {
	this.name = 'Shubham';
	this.age = 30;
	this.greet = function() {
		console.log('Hi , I am '+this.name+' and '+this.age+' years old');
	}
}

const person = new Person();
person.greet();