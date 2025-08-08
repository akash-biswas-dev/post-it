import { Component } from "@angular/core";
import { BlogCard, BlogCardType } from "../../components/blog-card/blog-card.component";
import { Button } from "../../components/button/button.component";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriesComponent, CategoryType } from "../../components/categories/categories.component";
import { Header } from "../../components/header/header.component";




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [BlogCard, Header, CategoriesComponent]
})
export class HomePage {


  constructor(activatedRoute: ActivatedRoute, protected router: Router) {
    activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }



  onChangeCategory(category: CategoryType) {
    this.router.navigate(['/home'], {
      queryParams: {
        category: category.name
      },
      queryParamsHandling: 'preserve'
    });
    console.log(category);
  }



  blogs$: BlogCardType[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Blog Post 1',
      description: 'Description for Blog Post 1',
      category: 'Tech',
      date: '2023-08-01',
      tags: ['Tech', 'Coding', 'Programming']
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1587620962726-69cdd5dc3d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Blog Post 2',
      description: 'Description for Blog Post 2',
      category: 'Lifestyle',
      date: '2023-07-20',
      tags: ['Lifestyle', 'Travel', 'Food']
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Blog Post 3',
      description: 'Description for Blog Post 3',
      category: 'Travel',
      date: '2023-06-15',
      tags: ['Travel', 'Adventure', 'Explore']
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273cf5a2b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Blog Post 4',
      description: 'Description for Blog Post 4',
      category: 'Tech',
      date: '2023-05-01',
      tags: ['Tech', 'Gaming', 'Esports']
    }
  ]
}