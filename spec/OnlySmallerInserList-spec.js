var OnlySmallerInsertList = require('./../src/OnlySmallerInsertList.js')

describe('OnlySmallerInsertList', function() {
	var instance;
	beforeEach(function(){
		instance = new OnlySmallerInsertList()
	})

	it('should push only greater value for number', function(){
		instance.add(1)
		instance.add(2)
		expect(instance.toString()).toEqual([1])
		instance.add(7)
		expect(instance.toString()).toEqual([1])
		instance.add(6)
		expect(instance.toString()).toEqual([1])
	})
})