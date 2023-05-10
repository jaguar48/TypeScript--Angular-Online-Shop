import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-navigation',
  template: `
    <div class="categories">
      <button [class.selected]="selectedCategory === 'all'" (click)="selectCategory('all')">ALL</button>
      <button [class.selected]="selectedCategory === 'women'" (click)="selectCategory('women')">WOMEN</button>
      <button [class.selected]="selectedCategory === 'men'" (click)="selectCategory('men')">MEN</button>
      <button [class.selected]="selectedCategory === 'kids'" (click)="selectCategory('kids')">KIDS</button>
    </div>
  `,
  styleUrls: ['./category-navigation.component.css']
})
export class CategoryNavigationComponent {
  selectedCategory: string = 'all';
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
