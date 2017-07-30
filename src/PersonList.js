var Person = require('./Person.js'),
	extend = require('./extend.js'),
	List = require('./List.js'),
	PersonList = extend(List);

PersonList.prototype.displayList = function(){
	var sortedList = this.sort()
	console.log(sortedList)
}

PersonList.prototype.add = function(name, gender){
	this.data[this.listSize] = new Person(name, gender);
	this.listSize++;
}

PersonList.prototype.sort = function() {
	return this.data.sort(function(a,b){
		return b.gender > a.gender;
	});
}

module.exports = PersonList