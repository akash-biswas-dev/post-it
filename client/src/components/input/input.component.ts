import { Component, computed, ElementRef, HostBinding, input, signal, ViewChild, WritableSignal } from "@angular/core";
import { AbstractControl, FormControl, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';

import { faEye, faKey } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @HostBinding('class') classes = 'flex flex-col gap-1 w-full';

  // Component attributes
  inputLabel = input<string>('Input Field'); // Input label;
  inputType = input<InputType>('text');
  options = input<string[]>([]);
  inputFormControl = input.required<AbstractControl<string | null, string | null, any> | null>();
  inputPlaceholder = input<string>('');


  protected fieldName = computed(() => this.inputLabel().toLocaleLowerCase().replaceAll(' ', '-'));

  protected formControlValue = computed(() => {
    return this.inputFormControl() as FormControl<string | null>;
  });

  // Icons for input-type password.
  showPasswordIcon: IconDefinition = faEye;
  hidePasswordIcon: IconDefinition = faEyeSlash;

  // Input field icon.
  showIcon = input<boolean>(false);
  inputIcon = input<IconDefinition>(faKeyboard);


  showPassword: WritableSignal<boolean> = signal(false);

  updateShowPassword() {
    this.showPassword.update((value) => !value);
  }



  isElementFocused: WritableSignal<boolean> = signal<boolean>(false);

  onFocus() {
    this.isElementFocused.set(true);
  }

  onBlur() {
    this.isElementFocused.set(false);
  }



}

export type InputType = 'text' | 'password' | 'email' | 'number' | 'select' | 'date';