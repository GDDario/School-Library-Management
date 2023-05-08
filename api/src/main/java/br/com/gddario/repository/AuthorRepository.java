package br.com.gddario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gddario.model.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer>{

}
