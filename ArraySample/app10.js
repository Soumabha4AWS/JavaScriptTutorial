
/********************* All about Sets ***************************************/

const ids = new Set(['Hi', 'from', 'set!']);
ids.add(2);
if (ids.has(2)) {
  ids.delete(2);
}

for (const entry of ids.entries()) {
  console.log('values from entries iterable in Set are ',entry);
}


for (const value of ids.values()) {
  console.log('values from values iterable in Set are ', value);
}


/********************* All about Maps ***************************************/


const person1 = { name: 'Shubham' };
const person2 = { name: 'Soumavo' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'today', price: 100 }]);

console.log('personData Map is ' , personData);
console.log('Get method of personData Map of person1 is ', personData.get(person1));
console.log('Get method of personData Map of person2 is ', personData.get(person2));

for (const entry of personData.entries()) {
  console.log('values from entries iterable in Map are ' , entry);
}


for (const [key, value] of personData.entries()) {
  console.log('values from key & value iterable in Map are ' , key, value);
}

for (const key of personData.keys()) {
  console.log('values from keys iterable in Map are ' , key);
}

for (const value of personData.values()) {
  console.log('values from values iterable in Map are ' , value);
}

console.log('size of  personData Map is ', personData.size);



