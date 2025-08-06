package com.cromxt.postit.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.cromxt.postit.models.UserModel;

@Repository
public abstract interface UserRepository extends ReactiveCrudRepository<UserModel, String> {

}
