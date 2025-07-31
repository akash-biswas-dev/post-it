package com.cromxt.postit.dtos.requests;

public record UserCredentialDTO(
        String emailOrUsername,
        String password) {

}
