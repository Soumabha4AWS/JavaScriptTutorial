function Person() {
	this.name = 'Shubham';
	this.age = 30;
	this.greet = function() {
		console.log('Hi , I am '+this.name+' and '+this.age+' years old');
	}
}


Person.prototype = {
		printAge1() {
		console.log('Age1 is',this.age);
	}
}



Person.prototype.printAge2 = function() {
		console.log('Age2 is',this.age);
	}


const person = new Person();
person.greet();
person.printAge1();
person.printAge2();

console.log('person prototype is',person.__proto__);