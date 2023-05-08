package br.com.gddario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gddario.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
