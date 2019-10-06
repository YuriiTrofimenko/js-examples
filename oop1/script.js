function person (name, age) {

	this.name = name;
  this.age = age;
  this.result = function () {
  	console.log(this.name, this.age);
  }
}

new person("John", 20).result();