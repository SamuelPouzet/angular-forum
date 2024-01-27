import { Injectable } from '@angular/core';
import {CATEGORIES} from "../mock/MockCategory";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories() :Observable<any> {
    return of(CATEGORIES);
  }
}
