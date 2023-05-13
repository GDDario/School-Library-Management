package br.com.gddario.dto;

public class UserDTO {

    // Attributes ----------
    private Integer id;
    private byte type;
    private byte status;
    private String name, email, username;

    // Constructors ----------
    public UserDTO() {

    }

    public UserDTO(Integer id, byte type, byte status, String name, String email, String username) {
        this.id = id;
        this.type = type;
        this.status = status;
        this.name = name;
        this.email = email;
        this.username = username;
    }

    // Getters and setters

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
