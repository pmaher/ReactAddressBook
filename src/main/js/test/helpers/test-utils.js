'use strict';

const TestUtils = {
	getAddressListOfSize(size) {
		let addresses = [];
		for(let i = 0; i < size; i++) {
			addresses.push({ 
		    	    "id":i,
		    	    "firstName":"firstName"+i,
		    	    "lastName":"lastName" + i,
		    	    "email":"email"+i+"@email.com",
		    	    "phone":"999-999-99"+i,
		    	    "address":"address"+i,
		    	    "address2":"address2"+i,
		    	    "city":"city"+i,
		    	    "state":"state"+i,
		    	    "zipcode":"999"+i
			});
		}
		return addresses;
	}
}

export default TestUtils;