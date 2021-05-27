

const nameData = ['Shubham', 'Sengupta', 'Men', 30];

const [ firstName, lastName, ...otherInformation ] = nameData;
console.log('firstName is ' , firstName);
console.log('lastName is ', lastName);
console.log('otherInformation is ' , otherInformation);