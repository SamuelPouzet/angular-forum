import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../bin/services/category.service";
import {Category} from "../../bin/interface/category";
import {Topic} from "../../bin/interface/topic";
import {TopicService} from "../../bin/services/topic.service";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories?: Topic[];
  topics?: Topic[];
  constructor(
    private categoryService: CategoryService,
    private topicService: TopicService
  ) {
    this.getCategories();
  }

  ngOnInit() {}

  getCategories() {
    this.categoryService.getCategories()
      .pipe(map( (item: Topic[]) => item.filter( x => x.category == 0 ) ) )
      .subscribe(topics => this.categories = topics);
  }
}
