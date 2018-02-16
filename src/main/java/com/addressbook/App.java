package com.addressbook;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.addressbook.dao.AddressBookRepository;

@SpringBootApplication
public class App
{
	
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
    
    @Bean
    @Profile("!test")
    CommandLineRunner init(AddressBookRepository repository) {
        return (args) -> {
        		//loads all the mp3 files stored on disk into our database
        		repository.save(new Address("firstName", "lastName", "email@email.com", "999-999-9999", "address", "address2",
    				"city", "CA", "91361"));
        };
    }
    
}
