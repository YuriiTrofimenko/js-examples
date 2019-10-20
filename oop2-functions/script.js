/*function showRange(from = 0, to = 0) {
  console.log("Range: from " + from + " to " + to );
  if (from === 0) {
  	return;
  }
	console.log("from !== 0");
}*/
//showRange();
//showRange(1, 10);
//console.log(showRange);

//eval()

/*function div(a = 0, b = 0) {
  try{
  	if (a / b === NaN) {
  		throw -1;
  	} else {
  		return a / b
  	}
  } catch (ex){
  	return -1;
  }
}
console.log(div(10, 5));
console.log(div());*/

/*function меч() {}

console.log(меч["name"]);
console.log(меч.name);

function рыцарь (оружие) {
    return function удар() {
   	 console.log("удар (" + оружие.name + ")");
  }
}

//console.log(рыцарь(меч));
//рыцарь(меч)();
const r1 = рыцарь(меч);
r1();*/

 /*let рыцарь = function (оружие) {
    return function удар() {
   	 console.log("удар (" + оружие.name + ")");
  }
};*/

/*let sum = (a, b) => a + b;
console.log("step2");
console.log(sum(2,2));*/

//Syntax: new Object(); or user = {}; or user = {firstName = “John”, age = 20};

// hanging commas is allowed for last props
/*user = {firstName: "John", age: 20,};

// Comparison (==, ===) only by reference

// delete prop "first name" from object person
delete user.firstName;
//delete person["firstName"];

console.log(user);*/

// build props
/*let fruit = prompt("What the fruit?", "apple");
let bag = {
  [fruit]: 5, // prop’s name will fetch from fruit
};
console.log( bag.apple );*/


/*function makeUser(name, age) {
  return {
    name, // name: name
    age   // age: age
    // ...
  };
}*/
// Check Prop
//alert("apple" in bag);

// Loop
/*for (key in bag) {
  console.log(key);
}*/

// function меч() {}

/*let рыцарь = function (id, оружие) {
	this.id = id;
	this.удар = function () {
    	// console.log("удар (" + оружие.name + ")");
    	console.log(`удар (${id}: ${оружие.name})`);
  }
};
new рыцарь(12, меч).удар(); */

/* function Рыцарь (оружие) {
	this.удар = function () {
    	console.log("удар (" + оружие.name + ")");
  }
};
let рыцарь = new Рыцарь(меч).удар(); */

let user = {
  name: "John",
  age: 30
};
let user1 = user;
let clone = Object.assign({}, user);
user1.age = 25;
console.log(user);
clone.name = "James";
console.log(user);



