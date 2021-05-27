
/********************* All about Break Of Loop ***************************************/

const ids = ['Hi', 'from', 'set!'];

console.log('**************** Break Example ***************'); 

for (const key in ids) {
  console.log('values from key iterable in Array are ',key);
  break;
}
for (const entry of ids.entries()) {
  console.log('values from entries iterable in Array are ',entry);
  break;
}


for (const key in ids) {
  console.log('values from key iterable in Array are ',ids[key]);
  break;
}
for (const value of ids.values()) {
  console.log('values from values iterable in Array are ', value);
  break;
}



/********************* All about Contunue Of Loop ***************************************/

console.log('**************** Continue Example ***************'); 


for (const key in ids) {
	if (key == 0) continue;
  console.log('values from key iterable in Array are ',key); 
}
for (const entry of ids.entries()) {
  console.log('values from entries iterable in Array are ',entry);
  break;
}


for (const key in ids) {
	if (key == 0) continue;
  console.log('values from key iterable in Array are ',ids[key]);
  
}
for (const value of ids.values()) {
  console.log('values from values iterable in Array are ', value);
  break;
}

