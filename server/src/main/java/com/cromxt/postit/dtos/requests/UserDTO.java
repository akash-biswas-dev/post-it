package com.cromxt.postit.dtos.requests;

public record UserDTO(
        String firstName,
        String lastName,
        String email,
        String password,
        String username) {

}
