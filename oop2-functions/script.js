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

// Описание функции сразу в объекте

user = {
  sayHi: function() {
    alert("Hi");
  }
};

//or
// сокращённая запись
user = {
  sayHi() {
    alert("Привет");
  }
};

***

 // В последней строке будет this == undefined
let user = {
  name: "John",
  hi() { alert(this.name); },
  bye() { alert("Bye!"); }
};
user.hi();
(user.name == "Джон" ? user.hi : user.bye)(); // Error!
// В строке с лямбдой this ссылается на user
let user = {
  firstName: "Yurii",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Yurii

***

// явное преобразование к типу Number
let num = Number(obj);

// Modern alternative toString()
let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
  console.log(`hint: ${hint}`);
  return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};
console.log(user);
console.log(+user);
console.log(user + 500);

// Old version of toString with cases for string n number/default
let user = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },
  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  }
};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

// Old version of toString - universal version
let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500

***
***

Data Types

Primitive types: string, number, boolean, symbol, null и undefined.
If we call some method for a primitive value, a wrapper object is created first (String, Number, Boolean, Symbol), then a method is called on it, and then the wrapper object is destroyed.

All numbers in JS are "double".
num.toString(base)
Math.floor, Math.ceil, Math.round, Math.trunc
Math.random()
Math.max(3, 5, -10, 0, 1)
Math.min(1, 2)
Math.pow(2, 10)
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math 


alert( 0.1.toFixed(20) ); // 0.10000000000000000555
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
alert( NaN === NaN ); // false

let num = +prompt("Enter a number", '');
// always returns true unless the argument is Infinity/-Infinity or not a number
alert( isFinite(num) );

Object.is(NaN, NaN) === true
Object.is(0, -0) === false

alert( +"100px" ); // NaN

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') );
alert( parseFloat('12.3.4') );
alert( parseInt('a123') );

***

// Strings (are immutable like in other langs)

alert(‘1 + 2 = ${sum(1, 2)}.’);
alert(“1 + 2 = ${sum(1, 2)}.”);
alert(`1 + 2 = ${sum(1, 2)}.`); // multiline support

alert( "\u00A9" );
alert( 'I\'m the Walrus!' );

alert( `My\n`.length );
let str = `Mariupol`;
alert( str[0] ); // M
alert( str.charAt(0) ); // M

// Other methods
toUpperCase
toLowerCase
indexOf
includes
startsWith
endsWith
slice
substring
substr
codePointAt
fromCodePoint
localeCompare
normalize

***

// Arrays (are mutable)

let arr = [];

// Methods
pop
push
shift
unshift

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) );

concat

arr.forEach(function(item, index, array) {
  // ...
});

indexOf
lastIndexOf
includes

find
findIndex
filter
map
sort
reverse
split
join

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result);

isArray

// !!!don't use arrays like objects!!!

***

Map – key/value collection of any types.
Properties:
new Map()
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
map.clear()
map.size

Object.fromEntries(map.entries())

***

Set - set of unique values

Properties:

new Set(iterable)
set.add(value)
set.delete(value)
set.has(value)
set.clear()
set.size

let set = new Set(["апельсин", "яблоко", "банан"]);
for (let value of set) alert(value);
// OR
set.forEach((value, valueAgain, set) => {
  alert(value);
});

***

WeakMap, WeakSet: keys (elements) are only objects

***

let user = {
  name: "John",
  age: 30
};
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]

***

et prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);


