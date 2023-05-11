import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
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
