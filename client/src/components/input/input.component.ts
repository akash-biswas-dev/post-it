import { Component, computed, input, Signal, signal, WritableSignal } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import faEye from '@fortawesome/free-solid-svg-icons/faEye';
import faEyeSlash from '@fortawesome/free-solid-svg-icons/faEyeSlash';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
  @if (inputType() === 'password') {
    
  }
  @else if (inputType() === 'select') {
    <select [name]="fieldName()" formControlName="formControlName()">
      <option disabled selected value="">Select {{label()}}</option>
      @for (option of options(); track $index) {
        <option [value]="option">{{option}}</option>
      }
    </select>

  }@else{
     <input 
        [type]="inputType()" 
        [placeholder]="label()" 
        [name]="fieldName()" 
    />
  }
  `
})
export class InputComponent {

  showPasswordIcon = faEye;
  hidePasswordIcon = faEyeSlash;

  showPassword:WritableSignal<boolean> = signal(false);


  label = input<string>('Input Field');
  fieldName = computed(() => this.label().toLocaleLowerCase().replace(' ', '-'));
  inputType = input<string>('text');
  inputName = input<InpuType>('text');
  options = input<string[]>([]);


  updateShowPassword() {
    this.showPassword.update((value) => !value);
  } 
  
}

export type InpuType = 'text' | 'password' | 'email' | 'number' | 'select';