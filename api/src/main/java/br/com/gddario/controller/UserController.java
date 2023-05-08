package br.com.gddario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.gddario.model.User;
import br.com.gddario.repository.UserRepository;

@RestController(value = "/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(path = "/users")
	public List<User> getUsers() {
		return userRepository.findAll();
	}
	
}
