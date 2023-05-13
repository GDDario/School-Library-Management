package br.com.gddario.controller;

import br.com.gddario.dto.Login;
import br.com.gddario.model.User;
import br.com.gddario.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private TokenService tokenService;

	@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "Requestor-Type", exposedHeaders = "X-Get-Header")
	@PostMapping("/login")
	public String login(@RequestBody Login login) {
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(login.username(), login.password());
		Authentication authentication = this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);
		User user = (User) authentication.getPrincipal(); 
		return tokenService.generateToken(user);
	}
	
}

