import { Component, signal, WritableSignal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule]
})
export class RegisterUseComponent {

  showPasswordIcon = faEye;
  hidePasswordIcon = faEyeSlash;

  newUserForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  showPassword: WritableSignal<boolean> = signal(false)

  updateShowPassword() {
    this.showPassword.update((value) => !value);
  }
  onSubmit() {
    console.log(this.newUserForm.value);
  }
}