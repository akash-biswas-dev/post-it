import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "../../components/header/header.component";




@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  standalone:true,
  imports: [RouterOutlet,Header],
})
export class AuthPage {
  
  constructor(){}


}