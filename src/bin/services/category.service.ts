import {Injectable} from '@angular/core';
import {CATEGORIES} from "../mock/MockCategory";
import {Observable, of} from "rxjs";
import {Category} from "../interface/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategory(id: number): Observable<Category> {
    const category = CATEGORIES.find(c => c.id === id)!;
    return of(category);
  }
}
