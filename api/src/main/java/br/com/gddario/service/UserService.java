package br.com.gddario.service;

import br.com.gddario.dto.UserDTO;
import br.com.gddario.model.User;
import br.com.gddario.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUsers() {
        List<User> users = userRepository.findAll();
        List<UserDTO> usersDTO = new ArrayList<>();

        for (int i = 0; i < users.size(); i++) {
            Integer id = users.get(i).getId();
            byte type = users.get(i).getType();
            byte status = users.get(i).getStatus();
            String name = users.get(i).getName();
            String email = users.get(i).getEmail();
            String username = users.get(i).getUsername();
            usersDTO.add(new UserDTO(id, type, status, name, email, username));
        }

        return usersDTO;
    }
}
