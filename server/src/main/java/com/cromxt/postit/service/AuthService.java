package com.cromxt.postit.service;

import com.cromxt.postit.dtos.requests.UserCredentialDTO;
import com.cromxt.postit.dtos.requests.UserDTO;

import reactor.core.publisher.Mono;

public interface AuthService {
  Mono<Void> registerUser(UserDTO userDto);

  Mono<String> login(UserCredentialDTO userCredentialDTO);
}
