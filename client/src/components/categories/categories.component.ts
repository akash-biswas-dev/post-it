import { NgClass } from "@angular/common";
import { Component, output, signal, WritableSignal } from "@angular/core";
import { BlogsService } from "../../services/blogs.service";



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgClass],
  template: `
  <div class="flex gap-4 flex-wrap mb-6">

    @for (category of categories$() ; track $index) {
      <span
  class="px-4 py-1 rounded-full cursor-pointer transition"
  [ngClass]="{
    'bg-blue-600 text-white hover:bg-blue-700': selectedCategory() === category.name,
    'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100': selectedCategory() !== category.name
  }"
  (click)="onChangeCategoryHandle(category)"
>
  {{ category.name }}
</span>
    }
  </div>
  `,
})
export class CategoriesComponent {

  selectedCategory: WritableSignal<string> = signal('');

  onChangeCategory = output<CategoryType>();

  protected readonly categories$: WritableSignal<CategoryType[]> = signal([]);


  constructor(blogService: BlogsService) {
    blogService.getBlogCategories().subscribe({
      next: (data) => {
        this.categories$.set(data);
        this.selectedCategory.set(data[0].name);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => { }
    });

  }

  onChangeCategoryHandle(category: CategoryType) {
    this.selectedCategory.set(category.name);
    this.onChangeCategory.emit(category);
  }
}

export type CategoryType = {
  id: number;
  name: string;
}