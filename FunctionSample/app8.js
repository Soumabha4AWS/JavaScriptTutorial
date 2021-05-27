
/*   Constructor Function   */

const GreetingConstFunc = function (greet) {
	this.greeting = greet;
	this.greet = function (greet) {
		console.log(this.greeting);
	}
}


class GreetingClass { 
	constructor(greet) {
		this.greeting = greet;
		this.greet = function (greet) {
		console.log(this.greeting);
		}
	}
};

var greetingConstFunc = new GreetingConstFunc('Hi GreetingFunc');
var greetingClass = new GreetingClass('Hi GreetingClass');

greetingConstFunc.greet();
greetingClass.greet();


const GreetingFactFunc = function (greeting) { 
	return {
		 greet() {
		console.log(greeting);
		}
	}
};

var greetingFactFunc = GreetingFactFunc('Hi GreetingFactFunc');
greetingFactFunc.greet();


