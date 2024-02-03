import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../bin/services/category.service";
import {map, Observable} from "rxjs";
import {Section} from "../../bin/interface/section";
import {Category} from "../../bin/interface/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() section: Section;
  categoryObserver$ !: Observable<Category[]>;
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
  ) {
    this.categoryObserver$ = this.categoryService.getCategories();
  }

  ngOnInit() {
    this.getCategoriesBySection();
  }

  getCategoriesBySection() {
    this.categoryObserver$.pipe(
      map(
        (categories) => categories.filter(x => x.section === this.section.id)
      )
    ).subscribe(categories => {
      this.categories = categories;
    });
  }
}
