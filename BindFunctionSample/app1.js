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

	greet = () => {
		console.log('Hi , I am '+this.name+' and '+this.age+' years old');
	}

}

const person = new Person();


const button = document.getElementById('btn');

button.addEventListener('click',person.greet);
