
/*   Constructor Function   */

const GreetingConstFunc = function (greet) {
	this.greeting = greet;
	this.greet = function (greet) {
		console.log('GreetingConstFunc is returning', this.greeting);
	}
}


class GreetingClass { 
	constructor(greet) {
		this.greeting = greet;
		this.greet = function (greet) {
		console.log('GreetingClass is returning', this.greeting);
		}
	}
};

var greetingConstFunc = new GreetingConstFunc(`"Hi GreetingFunc"`);
var greetingClass = new GreetingClass(`"Hi GreetingClass"`);

greetingConstFunc.greet();
greetingClass.greet();


const GreetingFactFunc = function (greeting) { 
	return {
		 greet() {
		console.log('GreetingFactFunc is returning', greeting);
		}
	}
};

var greetingFactFunc = GreetingFactFunc(`"Hi GreetingFactFunc"`);
greetingFactFunc.greet();


document.querySelector('#button1').addEventListener('click',greetingConstFunc.greet);

document.querySelector('#button2').addEventListener('click',greetingClass.greet);

document.querySelector('#button3').addEventListener('click',greetingFactFunc.greet);


