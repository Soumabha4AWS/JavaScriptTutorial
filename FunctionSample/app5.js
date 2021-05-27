let name1 = {
	firstName : "Shubham",
	lastName  : "Sengupta"
}

let name2 = {
	firstName : "Soumabha",
	lastName  : "Sengupta"
}


let name3 = {
	firstName : "Gogol",
	lastName  : "Sengupta"
}


let printFullName = function (homeTown , state) {
		console.log(this.firstName + " " + this.lastName + " is from "+ homeTown + " , " + state);
}


printFullName.call(name1,"Indore","MP");

printFullName.apply(name2,["New York","NYC"]);


let printMyFullName = printFullName.bind(name3,"Kolkata","WB");

printMyFullName();