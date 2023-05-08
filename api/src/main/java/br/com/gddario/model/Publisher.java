package br.com.gddario.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "publisher")
public class Publisher {

	// Attributes ----------
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name, nacionality;
	private LocalDate foundationDate;

	// Constructors ----------
	public Publisher() {
	}

	public Publisher(Integer id, String name, String nacionality, LocalDate foundationDate) {
		super();
		this.id = id;
		this.name = name;
		this.nacionality = nacionality;
		this.foundationDate = foundationDate;
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

	public LocalDate getFoundationDate() {
		return foundationDate;
	}

	public void setFoundationDate(LocalDate foundationDate) {
		this.foundationDate = foundationDate;
	}
}
