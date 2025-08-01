import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {
  

  constructor(private httpClient:HttpClient){}

  loginHandler(){
    this.httpClient
      .post<any>("/api/v1/auth",{emailOrUsername:"someemail", password:"12424"},{
        observe:'response'
      })
      .subscribe((res)=>{
        const {status, body} = res;
        console.log(status);
      })

  }
}
