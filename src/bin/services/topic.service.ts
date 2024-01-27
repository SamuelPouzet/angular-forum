import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Topic} from "../interface/topic";
import {TOPICS} from "../mock/MockTopic";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics(): Observable<Topic[]> {
    const topics = of(TOPICS);
    return topics;
  }

}
