package com.cromxt.postit.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UserDetailsRepositoryReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.web.server.authentication.ServerAuthenticationConverter;
import org.springframework.util.Assert;

import com.cromxt.postit.service.JwtService;
import com.cromxt.postit.service.impl.JwtServiceImpl.JwtConfigurer;

import reactor.core.publisher.Mono;

@Configuration
public class AuthConfig {

  @Bean
  ReactiveUserDetailsService reactiveUserDetailsService() {
    return (username) -> {

      return Mono.empty();
    };
  }

  @Bean
  ServerAuthenticationConverter bearerTokenAuthenticationConverter() {
    return (exchange) -> {
      return Mono.justOrEmpty(exchange.getRequest().getHeaders().getFirst("Authorization"))
          .filter(authHeader -> authHeader.startsWith("Bearer "))
          .map(authHeader -> authHeader.substring(7)) // remove "Bearer "
          .map(token -> new UsernamePasswordAuthenticationToken(token, "no-password"));
    };
  }

  @Bean
  ReactiveAuthenticationManager jwtAuthenticationManager(JwtService jwtService) {
    return (authentication) -> {
      String token = (String) authentication.getPrincipal();

      return Mono.just(new UsernamePasswordAuthenticationToken("username", "password",
          List.of(new SimpleGrantedAuthority("ROLE_USER"))));
    };
  }

  @Bean
  ReactiveAuthenticationManager authenticationManager(ReactiveUserDetailsService userDetailsService) {
    return new UserDetailsRepositoryReactiveAuthenticationManager(userDetailsService);
  }

  @Bean
  JwtConfigurer jwtConfigurer(Environment environment) {
    String secret = environment.getProperty("jwt.secret", String.class);
    String issuer = environment.getProperty("jwt.issuer", String.class);

    Assert.notNull(secret, "Jwt secret cant be null");
    Assert.notNull(issuer, "Issuer cant be null");
    return new JwtConfigurer(secret, issuer);
  }
}
