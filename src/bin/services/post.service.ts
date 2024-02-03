import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Post} from "../interface/post";
import {POSTS} from "../mock/MockPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPostsByTopics(id: number): Observable<Post[]> {
    const posts = POSTS.filter(p => p.topic === id);
    return of(posts);
  }
}
