import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";




@Component({
  selector:'app-not-found',
  templateUrl:'./not-found.page.html',
  standalone:true,
  imports:[RouterLink]
})
export class NotFoundPage {

  constructor(private router:Router){}
  
}