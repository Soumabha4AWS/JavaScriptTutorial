class AgedPerson {
	printAge() {
		console.log('Age is',this.age);
	}
}


class Person extends AgedPerson{
	name = 'Shubham';


	constructor() {
		super();
		this.age = 30;
	}

	greet() {
		console.log('Hi , I am '+this.name+' and '+this.age+' years old');
	}

}

const person = new Person();
person.greet();
person.printAge();

console.log('person prototype is',person.__proto__);
