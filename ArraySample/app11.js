
/********************* All about For Of Loop ***************************************/

const ids = ['Hi', 'from', 'set!'];


for (const key in ids) {
  console.log('values from key iterable in Array are ',key);
}
for (const entry of ids.entries()) {
  console.log('values from entries iterable in Array are ',entry);
}


for (const key in ids) {
  console.log('values from key iterable in Array are ',ids[key]);
}
for (const value of ids.values()) {
  console.log('values from values iterable in Array are ', value);
}

