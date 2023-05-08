package br.com.gddario.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "book")
public class Book {

	// Attributes ----------
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name, gender, location;
	private LocalDate publishDate;
	private boolean isPdfAvaliable;
	private int quantity, avaliableQuantity;

	// Constructors ----------
	public Book() {
	}

	public Book(Integer id, String name, String gender, String location, LocalDate publishDate,
			boolean isPdfAvaliable, int quantity, int avaliableQuantity) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.location = location;
		this.publishDate = publishDate;
		this.isPdfAvaliable = isPdfAvaliable;
		this.quantity = quantity;
		this.avaliableQuantity = avaliableQuantity;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public LocalDate getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(LocalDate publishDate) {
		this.publishDate = publishDate;
	}

	public boolean isPdfAvaliable() {
		return isPdfAvaliable;
	}

	public void setPdfAvaliable(boolean isPdfAvaliable) {
		this.isPdfAvaliable = isPdfAvaliable;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getAvaliableQuantity() {
		return avaliableQuantity;
	}

	public void setAvaliableQuantity(int avaliableQuantity) {
		this.avaliableQuantity = avaliableQuantity;
	}
}
