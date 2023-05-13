package br.com.gddario.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.gddario.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByUsername(String username);
}
