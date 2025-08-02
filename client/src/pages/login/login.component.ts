import { Component, signal, WritableSignal } from "@angular/core";

import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Button } from "../../components/button/button.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
  imports:[ReactiveFormsModule, Button, FontAwesomeModule],
  
})
export class LoginComponent {
 
  showPasswordIcon = faEye;
  hidePasswordIcon = faEyeSlash;

  userLoginForm = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl(''),
  });

  showPassword: WritableSignal<boolean> = signal(false);

  updateShowPassword() {
    this.showPassword.update((value) => !value);
  }

  onSubmit() {
    const { usernameOrEmail, password } = this.userLoginForm.value;

    if(!usernameOrEmail && !password){
      return;
    }

    
  }

} 