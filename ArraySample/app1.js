const numbers = [1, 2, 3];
console.log('numbers is ',numbers);

 const moreNumbers = Array();
 console.log('Blank moreNumbers is ',moreNumbers);


 const manyNumbers = Array.of(4,5,6);
 console.log('manyNumbers is ',manyNumbers);

 const yetStrings = Array("Hi","Welcome");
 console.log('yetStrings is ',yetStrings);

 const yetMoreNumbers = Array(1 , 2, 3);
 console.log('Non Blank moreNumbers is ',yetMoreNumbers);
 
  const blankNumbers = Array(5);
 console.log('blankNumbers is ',blankNumbers);

 const copyNumbers = Array.from(manyNumbers);
 console.log('copyNumbers is ',copyNumbers);
 
 
 const splitStrings = Array.from("Shubham");
 console.log('splitStrings is ',splitStrings);




const listItems = document.querySelectorAll('li');
console.log('listItems is ',listItems);

const arrayListItems = Array.from(listItems);
console.log('arrayListItems is ',arrayListItems);