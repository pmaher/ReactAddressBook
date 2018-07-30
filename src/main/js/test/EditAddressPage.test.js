require('./helpers/enzyme-setup');
import React from 'react';
import { EditAddress } from '../EditAddressPage';
import axios from 'axios';
import renderer from 'react-test-renderer';
//the MemoryRouter is used to get around issues around React context
import { MemoryRouter } from 'react-router-dom';
jest.mock('axios');

describe('EditAddress', () => {
	it('Should make ajax request to pull the appropriate address information', done => {
		const mockAddressData = { 
									data: { 
										"address": "2693 Commerce St.",
										"address2":"",
										"city":"Northridge",
										"email":"Linda.Douglas@gmail.com",
										"firstName":"Linda",
										"lastName":"Douglas",
										"id":3,
										"phone":"(805) 333-9999",
										"state":"CA",
										"zipcode":"91368"
									}
								};
		axios.get.mockResolvedValue(mockAddressData);
    	const wrapper = mount(<MemoryRouter><EditAddress addressId="3" /></MemoryRouter>);

    	//queue this assertion callback behind the axios mock promise being resolved
    	setImmediate(() => {
        	//this update is needed since the enzyme wrapper is immutable as of v.3
        	wrapper.update();
        	//using wrapper.debug() here to avoid clutter from the MemoryRouter rendering excessive attributes
        	expect(wrapper.debug()).toMatchSnapshot();
        	done();
    	});
	});
})