import { Component, HostBinding, signal, WritableSignal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { InputComponent } from "../../components/input/input.component";


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent]
})
export class RegisterUseComponent {

  @HostBinding('class')
  classes = 'bg-white p-8 rounded-xl shadow-xl w-full md:max-w-lg';

  showPasswordIcon = faEye;
  hidePasswordIcon = faEyeSlash;

  newUserForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl('')
  })

  showPassword: WritableSignal<boolean> = signal(false)

  updateShowPassword() {
    this.showPassword.update((value) => !value);
  }
  onSubmit() {
    console.log(this.newUserForm.value);
  }
}