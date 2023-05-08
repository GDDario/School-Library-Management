package br.com.gddario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gddario.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{

}
