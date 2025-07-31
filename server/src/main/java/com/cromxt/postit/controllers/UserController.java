package com.cromxt.postit.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cromxt.postit.dtos.requests.UserDTO;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/api/v1/users")
public class UserController {

  @GetMapping
  public Mono<UserDTO> user() {
    return Mono.just(new UserDTO("Akash", "Biswas", "akashbiswas.27199@gmail.com", null, "akashbiswas"));
  }
}
