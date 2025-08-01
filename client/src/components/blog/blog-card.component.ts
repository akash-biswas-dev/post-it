import { Component, input } from "@angular/core";



@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  standalone:true
})
export class BlogCard{

  blog = input.required<BlogCardType>();

}

export interface BlogCardType {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
}