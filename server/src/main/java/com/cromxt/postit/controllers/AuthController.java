package com.cromxt.postit.controllers;

import java.net.URI;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cromxt.postit.dtos.requests.UserCredentialDTO;
import com.cromxt.postit.dtos.requests.UserDTO;
import com.cromxt.postit.service.AuthService;
import com.cromxt.postit.service.JwtService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/auth")
public class AuthController {

  private final AuthService authService;
  private final JwtService jwtService;

  @PostMapping(value = "/register")
  public Mono<ResponseEntity<Void>> registerUser(@RequestBody UserDTO userDTO) {
    return authService.registerUser(userDTO)
        .then(Mono.just(new ResponseEntity<Void>(HttpStatus.CREATED)))
        .onErrorResume((err) -> {
          log.error("Error occurred while register the user {}", err.getMessage());
          return Mono.just(new ResponseEntity<Void>(HttpStatus.BAD_REQUEST));
        });
  }

  @PostMapping
  public Mono<Void> login(@RequestBody UserCredentialDTO userCredentials, ServerHttpRequest request,
      ServerHttpResponse response) {
    return authService.login(userCredentials)
        .flatMap(userToken -> {
          ResponseCookie cookie = ResponseCookie.from("sessionId", userToken)
              .httpOnly(true)
              .domain("postit.com")
              .maxAge(jwtService.getExpiration())
              .path("/")
              .build();
          response.addCookie(cookie);
          response.getHeaders().setLocation(URI.create(request.getURI().getScheme() + "://" + jwtService.getIssuer()));
          response.setStatusCode(HttpStatus.TEMPORARY_REDIRECT);
          return response.setComplete();
        })
        .onErrorResume(err -> {
          response.setStatusCode(HttpStatus.BAD_REQUEST);
          response.getHeaders().set("message", err.getMessage());
          return response.setComplete();
        });
  }
}
