package com.cromxt.postit.service.impl;

import org.springframework.stereotype.Service;

import com.cromxt.postit.dtos.requests.UserCredentialDTO;
import com.cromxt.postit.dtos.requests.UserDTO;
import com.cromxt.postit.repository.UserRepository;
import com.cromxt.postit.service.AuthService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements AuthService {

  private final UserRepository userDataRepository;

  @Override
  public Mono<Void> registerUser(UserDTO userDto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'registerUser'");
  }

  @Override
  public Mono<String> login(UserCredentialDTO userCredentialDTO) {
    return Mono.just("alongsessionid");
  }

}
