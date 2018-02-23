import React from 'react';

import {configure, mount} from 'enzyme';
import { AddressList, Address } from '../addressList';
import { expect } from 'chai';

require('./helpers/enzyme-setup');
import TestUtils from './helpers/test-utils';
    
describe('AddressList', () => {
    let mountWrapper;
    
    
    it('should display only header row if no addresses are present', () => {
		const addresses = TestUtils.getAddressListOfSize(0);
		mountWrapper = mount(<AddressList addresses={addresses} />);
		//1 header row and 1 data row
		expect(mountWrapper.find('tr').length).to.equal(1);
		//expect 4 header data columns
		expect(mountWrapper.find('tbody').childAt(0).children()).to.have.length(4);
		//no data is displayed because we have no addresses!
		expect(mountWrapper.find('td')).to.have.length(0);
    });
    
    it('should have rows for each address we have', () => {
    		const addresses = TestUtils.getAddressListOfSize(1);
        mountWrapper = mount(<AddressList addresses={addresses} />);
    		//1 header row and 1 data row
    		expect(mountWrapper.find('tr').length).to.equal(2);
    		//expect 4 header data columns
    		expect(mountWrapper.find('tbody').childAt(0).children()).to.have.length(4);
    		expect(mountWrapper.find('td')).to.have.length(4);
    		expect(mountWrapper.find('td').at(0).text()).to.contain(addresses[0].firstName);
    		expect(mountWrapper.find('td').at(1).text()).to.contain(addresses[0].lastName);
    		expect(mountWrapper.find('td').at(2).text()).to.contain(addresses[0].email);
    		expect(mountWrapper.find('td').at(3).text()).to.contain(addresses[0].phone);
    });
  });
    
 describe('Address', () => {
    let mountWrapper, renderWrapper, wrapper;
    const address = { "id":1, "firstName":"firstName", "lastName":"lastName",
    	    "email":"email@email.com", "phone":"999-999-9999",
    	    "address":"address", "address2":"address2",
    	    "city":"city", "state":"CA",  "zipcode":"91361" };
    
    mountWrapper = mount(<table><tbody><Address address={address} /></tbody></table>);
    
    it('should return the table data populated with the address information', () => {
    	
    		expect(mountWrapper.find('tr')).to.be.defined;
    		expect(mountWrapper.find('tr').length).to.equal(1);
    		expect(mountWrapper.find('tr').children()).to.have.length(4);
    		expect(mountWrapper.find('tr').childAt(0)).to.have.length(1);
    		
    		expect(mountWrapper.find('tr').childAt(0).text()).to.contain(address.firstName);
    		expect(mountWrapper.find('tr').childAt(1).text()).to.contain(address.lastName);
    		expect(mountWrapper.find('tr').childAt(2).text()).to.contain(address.email);
    		expect(mountWrapper.find('tr').childAt(3).text()).to.contain(address.phone);
    });
  });