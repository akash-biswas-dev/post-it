package com.cromxt.postit.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cromxt.postit.dtos.response.BlogsCategoryDTO;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/v1/blogs")
public class BlogsController {



  @GetMapping(value = "/categories")
  public Mono<ResponseEntity<List<BlogsCategoryDTO>>> getblogsCategory() {
    Mono<List<BlogsCategoryDTO>> categories = Mono.just(List.of(new BlogsCategoryDTO("1", "Category 1"),
        new BlogsCategoryDTO("2", "Category 2")));

    return categories.flatMap(categoryList->{
      return Mono.just(ResponseEntity.ok(categoryList));
    })
    .onErrorResume(err -> {
      // TODO: Handle the errror more detailed way.
      return Mono.just(ResponseEntity.badRequest().build());
    });
  }
  
}
