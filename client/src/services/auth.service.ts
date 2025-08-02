import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID, signal, WritableSignal } from "@angular/core";



@Injectable({ providedIn: 'root' })
export class AuthService {

  authToken:WritableSignal<string| null>= signal(null); 

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if(isPlatformBrowser(platformId)){
      const token = localStorage.getItem('Authrization');
      if(token){
        this.authToken.set(token)
      }
    }
  }

  logout(){
    this.authToken.set(null);
    localStorage.removeItem('Authorization');
  }
}