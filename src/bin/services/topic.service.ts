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
    return  of(TOPICS);
  }

  getTopic(id: number): Observable<Topic> {
    const topic = TOPICS.find(t => t.id === id)!;
    return of(topic);
  }

  getTopicsByCategory(id: number): Observable<Topic[]> {
    const topics = TOPICS.filter(t => t.category === id);
    return of(topics);
  }

}
