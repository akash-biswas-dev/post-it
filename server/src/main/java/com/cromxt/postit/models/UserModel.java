package com.cromxt.postit.models;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
@AllArgsConstructor
@Table(name = "users")
public class UserModel implements UserDetails {

  @Id
  public String id;

  @Getter(value = AccessLevel.NONE)
  public String username;
  @Getter(value = AccessLevel.NONE)
  public String password;
  public String firstName;
  public String lastName;
  public String email;
  public String role;
  public Boolean isEnabled;
  public Boolean isLocked;

  public void setRole(Role role) {
    this.role = role.name();
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority(role));
  }

  @Override
  public String getPassword() {
    return this.password;
  }

  @Override
  public String getUsername() {
    return this.username;
  }
}
