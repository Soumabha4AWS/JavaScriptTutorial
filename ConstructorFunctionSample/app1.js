class Person {
	name = 'Shubham';


	constructor() {
		this.age = 30;
	}

	greet() {
		console.log('Hi , I am '+this.name+' and '+this.age+' years old');
	}

}

const person = new Person();
person.greet();