import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";




@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
  [ngClass]="{
    'bg-blue-600 text-white hover:bg-blue-700': variant() === 'primary',
    'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100': variant() === 'secondary'
  }"
  class="px-4 py-2 rounded-full transition font-medium"
>
  {{ label() }}
</button>
`
})
export class Button {

  label = input.required();
  variant = input<'primary' | 'secondary'>('primary');
}