require('./helpers/enzyme-setup');
import React from 'react';
import { AddressList, Address, EditAddressButton } from '../AddressList';
import axios from 'axios';
import renderer from 'react-test-renderer';
//the MemoryRouter is used to get around issues around React context
import { MemoryRouter } from 'react-router-dom';
jest.mock('axios');
    
describe('AddressList', () => {
    
    it('should make request to backend to retrieve all addresses', done => {
    	const response = { data: [
    		{
    			id: 1,
    			firstName: "James",
    			lastName: "Carter",
    			email: "James.Carter@hotmail.com",
    			phone: "(805) 111-9999",
    			address: "110 W. Liberty St.",
    			address2: "",
    			city: "Madison",
    			state: "WI",
    			zipcode: "53001"
    		},
    		{
    			id: 2,
    			firstName: "Helen",
    			lastName: "Leary",
    			email: "Helen.Leary@yahoo.com",
    			phone: "(805) 222-8888",
    			address: "638 Cardinal Ave.",
    			address2: "Apt. 2",
    			city: "Sun Prairie",
    			state: "WI",
    			zipcode: "53002"
    		}
    	]};
    	axios.get.mockResolvedValue(response);
    	
    	const wrapper = mount(<MemoryRouter><AddressList /></MemoryRouter>);
    	
    	//we need queue this assertion until the mocked promise has been resolved to ensure the state of the wrapper was set correctly
    	setImmediate(() => {
    		debugger;
    		//we need this children wrappers here to get inside of the MemoryRouter
    		expect(wrapper.children(0).children(0).instance().state.addresses).toEqual(response.data);
    		/* this update is needed since the enzyme wrapper is immutable as of v.3
    		updates the mounted wrapper to reflect data from the mock ajax request */
    		wrapper.update();
    		expect(wrapper.debug()).toMatchSnapshot();
    		done();
    	});
    });
    
    
    it('should display "no results" message when no addresses are found', done => {
    	const response = { data: [] };
    	axios.get.mockResolvedValue(response);
    	const wrapper = mount(<MemoryRouter><AddressList /></MemoryRouter>);
    	
    	//we need queue this assertion until the mocked promise has been resolved to ensure the state of the wrapper was set correctly
    	setImmediate(() => {
    		debugger;
    		//we need this children wrappers here to get inside of the MemoryRouter
    		expect(wrapper.children(0).children(0).instance().state.addresses).toEqual(response.data);

    		/* this update is needed since the enzyme wrapper is immutable as of v.3
    		updates the mounted wrapper to reflect data from the mock ajax request */
    		wrapper.update();
    		expect(wrapper.debug()).toMatchSnapshot();
    		done();
    	});
    });

});

describe('EditAddressButton', () => {
	it('should navigate to the url passed in via props when clicked', () => {
		const pushMock = jest.fn(),
			historyMock = { "push": pushMock },
			//Then we tell enzyme to explicitly only render the WrappedComponent, not the router, to access the mock history props
			wrapper = mount(<MemoryRouter><EditAddressButton.WrappedComponent to={"/edit/3"} history={historyMock}>Edit</EditAddressButton.WrappedComponent></MemoryRouter>);

		const button = wrapper.find('button').at(0);
		button.prop('onClick')();
		expect(pushMock.mock.calls.length).toBe(1);
		// The first argument of the first call to the function was 0
		expect(pushMock.mock.calls[0][0]).toBe("/edit/3");
	});
});

