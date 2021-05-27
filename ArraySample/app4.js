let hobbies = ['Playing Sports','Doing Excercises','Doing Meditation','Watching News','Singing Songs','Doing Excercises','Doing Meditation'];


hobbies = hobbies.concat(['Playing Music','Listening Music']); 

console.log('hobbies now is ',hobbies);

/* Finding the postion of the Index */

console.log("Postion of 'Doing Excercises' from starting in hobbies is ",hobbies.indexOf('Doing Excercises'));

/* Finding the last postion of the Index */

console.log("Postion of 'Doing Excercises' from end in hobbies is ",hobbies.lastIndexOf('Doing Excercises'));


const personData = [{ name : "Shubham" },{ name : "Sengupta" }];

/* Cannot find the postion of the Index */

console.log(`Postion of { name : "Shubham" } from end in personData is `,hobbies.lastIndexOf({ name : "Shubham" }));

const eachPerson = personData.find((person, index , persons)=> {
	return person.name === 'Sengupta';
});

console.log('eachPerson is ',eachPerson);

eachPerson.name = "Gogol";

console.log('personData is ',personData);



const eachPersonIndex = personData.findIndex((person, index , persons)=> {
	return person.name === 'Gogol';
});

console.log('eachPerson position in personData ',eachPersonIndex);

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var halfArray = numberArray.find(function (element) { 
        return element > 4; 
    });
	
console.log('halfArray is ',halfArray);