package br.com.gddario.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "author")
public class Author {

	// Attributes ----------
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name, nacionality, biografy;
	private LocalDate birt;

	// Constructors ----------
	public Author() {
	}

	public Author(Integer id, String name, String nacionality, String biografy, LocalDate birt) {
		super();
		this.id = id;
		this.name = name;
		this.nacionality = nacionality;
		this.biografy = biografy;
		this.birt = birt;
	}

	// Getters and setters ----------
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNacionality() {
		return nacionality;
	}

	public void setNacionality(String nacionality) {
		this.nacionality = nacionality;
	}

	public String getBiografy() {
		return biografy;
	}

	public void setBiografy(String biografy) {
		this.biografy = biografy;
	}

	public LocalDate getBirt() {
		return birt;
	}

	public void setBirt(LocalDate birt) {
		this.birt = birt;
	}
}
