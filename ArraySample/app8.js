
const prices = [10.99, 5.99, 3.99, 6.59];
console.log('Minimum Prices is ',Math.min(...prices)); 
console.log('Maximum Prices is ',Math.max(...prices)); 

const joinName = ['Max', 'Schwarz'];
const joinedName = joinName.join(' ');
console.log('joinedName is ', joinedName);

const copiedNameFragments = [...joinName];



const persons = [{name : "Shubham", age : "30"},{name : "Gogol", age : "29"}];
const copiedPersons = [...persons];

const copiedPersonsWithMap = persons.map(person => ({name : person.name, age : person.age}));

persons.push({name : "Soumavo" , age : "31"});
persons[0].age = '32';

console.log('persons is ', persons);
console.log('copiedPersons is ', copiedPersons);
console.log('copiedPersonsWithMap is ', copiedPersonsWithMap);




