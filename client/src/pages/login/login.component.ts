import { Component } from "@angular/core";

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Button } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, Button, FontAwesomeModule, InputComponent],

})
export class LoginComponent {

  userLoginForm = new FormGroup({
    usernameOrEmail: new FormControl<string>('', [Validators.minLength(5)]),
    password: new FormControl<string>(''),
  });



  onSubmit() {
    const { usernameOrEmail, password } = this.userLoginForm.value;

    console.log(usernameOrEmail, password);

    if (!usernameOrEmail && !password) {
      return;
    }


  }

} 