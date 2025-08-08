import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicationService } from "./application.service";
import { CategoryType } from "../components/categories/categories.component";



@Injectable({ providedIn: 'root' })
export class BlogsService {
  constructor(private httpClient: HttpClient, private applicationService: ApplicationService) { }



  getBlogCategories() {
    return this.httpClient
      .get<CategoryType[]>(`${this.applicationService.getBaseURL()}/v1/blogs/categories`)
  }
}