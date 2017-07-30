function List () {
	this.data = [];
	this.pos = 0;
	this.listSize = 0;
}

List.prototype.remove  = function () {

}

List.prototype.add = function (elem) {
	this.data[this.listSize] = elem;
	this.listSize += 1;
}

List.prototype.toString = function () {
	return this.data;
}

module.exports = List