import { NgClass } from "@angular/common";
import { Component, input, output } from "@angular/core";




@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
    (click)="onClickHandler()"
  [ngClass]="{
    'bg-blue-600 text-white hover:bg-blue-700': variant() === 'primary',
    'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100': variant() === 'secondary'
  }"
  [class]="class()+ ' ' + 'px-4 py-2 rounded-full transition font-medium'"
>
  {{ label() }}
</button>
`
})
export class Button {

  click = output<void>();

  label = input.required();
  variant = input<'primary' | 'secondary'>('primary');
  class = input<string>('');

  onClickHandler() {}
}