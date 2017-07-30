var PersonList = require('./../src/PersonList.js')

describe('PersonList', function(){
	var instance;
	beforeEach(function(){
		instance = new PersonList();
		instance.add('Sam', 'M');
		instance.add('Priya', 'F');
		instance.add('Arunima', 'F');
		instance.add('Dushyant', 'M');
		instance.add('Neeraj', 'M');
	});

	it('should sort according to gender', function(){
		instance.displayList();
	})
})