const hobbies = ['Playing Sports','Doing Excercarees'];

/* Add to the last element */
hobbies.push('Doing Meditation');  
console.log('My hobbies are ',hobbies);
/* Add to the first element */
hobbies.unshift('Watching News');  
console.log('My hobbies are ',hobbies);

/* Remove the last element */
hobbies.pop();  
console.log('My hobbies are ',hobbies);
/* Remove the first element */
hobbies.shift('Watching News');  
console.log('My hobbies are ',hobbies);

/* Replace an element */
hobbies[1] = 'Doing Running';
console.log('My hobbies are ',hobbies);

/* Replace an element */
hobbies[5] = 'Watching Sports';
console.log('My hobbies are ',hobbies);

console.log('One of my hobby are ',hobbies[4]);


/* Add to the first element */
hobbies.splice(0, 0, 'Doing Meditation');  
console.log('My hobbies are ',hobbies);

/* Add to the second element */
hobbies.splice(1, 0, 'Watching News');  
console.log('My hobbies are ',hobbies);

/* Remove the first one element */
hobbies.splice(0, 1);  
console.log('My hobbies are ',hobbies);

/* Remove the last one element */
hobbies.splice(-1, 1);  
console.log('My hobbies are ',hobbies);

/* Remove the last third element */
hobbies.splice(-1, 3);  
console.log('My hobbies are ',hobbies);

/* Remove the second last element */
hobbies.splice(-2, 1);  
console.log('My hobbies are ',hobbies);

/* Remove all element except first two*/
hobbies.splice(2);
console.log('My hobbies are ',hobbies);