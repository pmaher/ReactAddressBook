package com.addressbook.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.addressbook.Address;
import com.addressbook.dao.AddressBookRepository;

@Controller
public class AddressBookController {
	
	@Autowired
	AddressBookRepository addressBookRepository;

	@GetMapping("/")
	public String getIndex() {
		return "index";
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/api/address/{addressId}", produces = {
			MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public Address getAddressById(@PathVariable("addressId") int addressId) {
		return (Address) addressBookRepository.findOne((long) addressId);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/api/address", produces = {
			MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public List<Address> listAllAddresses() {
		return (List<Address>) addressBookRepository.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/api/address", produces = {
			MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public Address newAddress(@RequestBody Address newAddress) {

		if(newAddress != null) {
			addressBookRepository.save(newAddress);
		}
		return newAddress;
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/api/address/{addressId}", produces = {
			MediaType.APPLICATION_JSON_VALUE }) 
	@ResponseBody
	public String deleteAddress(@PathVariable("addressId") long addressId) {
		addressBookRepository.delete(addressId);
		return "{ \"message\":\"success\"\n }";
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/api/address/{addressId}", produces = {
			MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public Address updateAddress(@PathVariable("addressId") long addressId, @RequestBody Address updatedAddress) {
		return newAddress(updatedAddress);
	}
}
