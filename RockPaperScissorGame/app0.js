const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
	console.log('Game is starting ...');
	// return "My startGame has begun";
}


const person = {
	name : 'Max',    // Property --> Variable in an Object 
	greet : function greet() {    // Method --> Function in an object
		console.log('Good Morning');
	}
};

console.log('My name is ' + person.name);
person.greet();

console.log('startGame is a ',typeof startGame());

startGameBtn.addEventListener('click',startGame);