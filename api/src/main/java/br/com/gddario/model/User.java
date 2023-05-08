package br.com.gddario.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	// Attributes ----------
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private byte type; // 0 - administrator | 1 - normal user
	private byte status; // 0 - activated | 1 - deleted
	private String name, email, userName, password;
	private LocalDateTime registerDate, lastDateOnline;

	// Constructors ----------
	public User() {
	}

	public User(Integer id, byte type, byte status, String name, String email, String userName,
			LocalDateTime registerDate, LocalDateTime lastDateOnline) {
		super();
		this.id = id;
		this.type = type;
		this.status = status;
		this.name = name;
		this.email = email;
		this.userName = userName;
		this.registerDate = registerDate;
		this.lastDateOnline = lastDateOnline;
	}

	// Getters and Setters ----------

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public byte getType() {
		return type;
	}

	public void setType(byte type) {
		this.type = type;
	}

	public byte getStatus() {
		return status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDateTime getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(LocalDateTime registerDate) {
		this.registerDate = registerDate;
	}

	public LocalDateTime getLastDateOnline() {
		return lastDateOnline;
	}

	public void setLastDateOnline(LocalDateTime lastDateOnline) {
		this.lastDateOnline = lastDateOnline;
	}

}
