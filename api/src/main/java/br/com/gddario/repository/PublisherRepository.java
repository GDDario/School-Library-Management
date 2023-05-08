package br.com.gddario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gddario.model.Publisher;

@Repository
public interface PublisherRepository extends JpaRepository<Publisher, Integer>{

}
