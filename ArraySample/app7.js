

const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragements = ['Max', 'Schwarz'];
const name = nameFragements.join(' ');
console.log(name);