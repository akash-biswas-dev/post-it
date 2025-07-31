package com.cromxt.postit.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.cromxt.postit.models.UserModel;

public interface UserDataRepository extends ReactiveCrudRepository<UserModel, String> {

}
