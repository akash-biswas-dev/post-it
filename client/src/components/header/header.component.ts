import { Component, computed, inject, OnDestroy, Signal, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from "@angular/router";
import { Button } from "../button/button.component";
import { filter, Subscription } from "rxjs";
import { AuthService } from "../../services/auth.service";


@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  standalone:true,
  imports:[Button,RouterLink]
})
export class Header implements OnDestroy{

  activatedRoutSubscription:Subscription;

  private authService:AuthService = inject(AuthService);

  isAuthenticated:Signal<boolean> = computed(()=>{
    if(this.authService.authToken()){
      return true;
    }
    return false;
  });

  currentPath:WritableSignal<string> = signal('');

  constructor(protected router:Router){
    this.activatedRoutSubscription = router.events.pipe(filter(eve => eve instanceof NavigationEnd))
    .subscribe((eve) =>{
      this.currentPath.set(eve.urlAfterRedirects);
    })
  }
  ngOnDestroy(): void {
    this.activatedRoutSubscription.unsubscribe();
  }

}