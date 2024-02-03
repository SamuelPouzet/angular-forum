import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Section} from "../interface/section";
import {SECTIONS} from "../mock/MockSection";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor() { }

  getSections(): Observable<Section[]> {
    return of(SECTIONS);
  }
}
