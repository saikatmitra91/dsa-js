function extend(ParentClass, childClass) {
	var extendedClass = childClass ? childClass : getDefaultChildClass(ParentClass),
		originalConstructor = extendedClass.prototype.constructor;
	extendedClass.prototype = Object.create(ParentClass.prototype);
	extendedClass.prototype.constructor = originalConstructor;
	return extendedClass;
}

function getDefaultChildClass (ParentClass) {
	return function(){
		ParentClass.apply(this, arguments);
	};
}

module.exports = extend