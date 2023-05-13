package br.com.gddario.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;

import br.com.gddario.model.User;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    public String generateToken(User user) {
        return JWT.create().withIssuer("access").withSubject(user.getUsername()).withClaim("id", user.getId()).
                withExpiresAt(LocalDateTime.now().plusHours(6).toInstant(ZoneOffset.of("-03:00"))).
                sign(Algorithm.HMAC256("secret"));
    }

    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256("secret")).withIssuer("access").build().verify(token).getSubject();
    }
}
