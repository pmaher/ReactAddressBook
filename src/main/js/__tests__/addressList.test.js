import React from 'react';
import {shallow, mount, to, have} from 'enzyme';
import { AddressList, Address } from '../addressList';
require('./helpers/enzyme-setup');

import { equal, ok } from 'assert';

describe('AddressList', () => {
    let shallowWrapper, hasBeenClicked = false, wrapper;
    const onClick = () => { hasBeenClicked = true; }, addresses = [{
    	    "id":1,
    	    "firstName":"firstName",
    	    "lastName":"lastName",
    	    "email":"email@email.com",
    	    "phone":"999-999-9999",
    	    "address":"address",
    	    "address2":"address2",
    	    "city":"city",
    	    "state":"CA",
    	    "zipcode":"91361"
    	}];
    
    beforeEach(() => {
      console.log("************");
      shallowWrapper = shallow(<AddressList addresses={addresses} />);
    });

    it('should return the appropriate table elements populated with the address', () => {
    		console.log(shallowWrapper.html());
    		console.log("&&&&&&&&");
    		console.log(shallowWrapper.find('table'));
    		expect(shallowWrapper.find('table')).to.have.length(1);
    		expect(shallowWrapper.find('td')).to.have.length(4);
    });

  });