var extend = require('./extend.js'),
	List = require('./List.js'),
	OnlyGreaterInsertList = extend(List);

OnlyGreaterInsertList.prototype.add = function(elem){
	if (typeof elem !== 'number' || typeof elem === 'string') {
		return
	}

	if (this.data.every(greater(elem))) {
		this.data[this.listSize] = elem;
		this.listSize += 1;
	}
}

function greater(value) {
	return function (currValue) {
		return value > currValue;
	}
}

module.exports = OnlyGreaterInsertList