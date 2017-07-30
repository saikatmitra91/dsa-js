var OnlyGreaterInsertList = require('./../src/OnlyGreaterInsertList.js')

describe('OnlyGreaterInsertList', function() {
	var instance;
	beforeEach(function(){
		instance = new OnlyGreaterInsertList()
	})

	it('should push only greater value for number', function(){
		instance.add(1)
		instance.add(2)
		expect(instance.toString()).toEqual([1, 2])
		instance.add(7)
		expect(instance.toString()).toEqual([1, 2, 7])
		instance.add(6)
		expect(instance.toString()).toEqual([1, 2, 7])
	})
})