function Person(name, gender){
	this.name = name;
	this.gender = gender;
}

Person.prototype.toString = function() {
	return 'name: ' + this.name + ' gender: ' + this.gender;
}

module.exports = Person;