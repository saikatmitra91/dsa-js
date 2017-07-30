var extend = require('./extend.js'),
	List = require('./List.js'),
	OnlySmallerInsertList = extend(List);

OnlySmallerInsertList.prototype.add = function(elem){
	if (typeof elem !== 'number' || typeof elem === 'string') {
		return
	}

	if (this.data.every(smaller(elem))) {
		this.data[this.listSize] = elem;
		this.listSize += 1;
	}
}

function smaller(value) {
	return function (currValue) {
		return value < currValue;
	}
}

module.exports = OnlySmallerInsertList