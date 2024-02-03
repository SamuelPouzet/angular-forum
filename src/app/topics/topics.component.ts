import {Component, OnInit} from '@angular/core';
import {Topic} from "../../bin/interface/topic";
import {TopicService} from "../../bin/services/topic.service";
import {Observable} from "rxjs";
import {Category} from "../../bin/interface/category";
import {CategoryService} from "../../bin/services/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topicsObservable$ : Observable<Topic[]>;
  topics!: Topic[];
  categoryObservable$ :Observable<Category>;
  category: Category;

  constructor(
    protected categoryService: CategoryService,
    protected topicService: TopicService,
    protected route: ActivatedRoute,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryObservable$ = this.categoryService.getCategory(id);
    this.topicsObservable$ = this.topicService.getTopicsByCategory(id);
  }

  ngOnInit() {
    this.getCategory();
    this.getTopics();
  }

  getCategory() :void {
    this.categoryObservable$.subscribe(category => this.category = category);
  }

  getTopics() {
    this.topicsObservable$.subscribe(topics => this.topics = topics);
  }

}
