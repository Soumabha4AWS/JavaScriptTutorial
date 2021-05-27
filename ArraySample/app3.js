const hobbies = ['Playing Sports','Doing Excercises','Doing Meditation','Watching News'];
const myHobbies = hobbies;

/* Add to the last element of the original array */
hobbies.push('Doing Meditation');  

console.log('Hobbies are ',hobbies);
console.log('My hobbies are ',myHobbies);

/* Slice makes a copy , it is different than Splice*/

const yourHobbies = hobbies.slice();

/* Add to the last element of the original array */
hobbies.push('Watching News');  

console.log('Hobbies are ',hobbies);
console.log('Your hobbies are ',yourHobbies);


/* Split the array from the 2nd element */
const partOfHobbies = hobbies.slice(2);
console.log('PartOfHobbies are ',partOfHobbies);

/* Split the array from the 3rd last element to the last element */
const lastOfHobbies = hobbies.slice(-3,-1);
console.log('LastOfHobbies are ',lastOfHobbies);


/* Concatenate more elements to the array */
const concatHobbies = hobbies.concat('Watching Movies');
console.log('ConcatHobbies are ',concatHobbies);