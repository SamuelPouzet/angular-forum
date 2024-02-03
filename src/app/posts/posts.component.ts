import {Component, OnInit} from '@angular/core';
import {Post} from "../../bin/interface/post";
import {PostService} from "../../bin/services/post.service";
import {Observable} from "rxjs";
import {Topic} from "../../bin/interface/topic";
import {TopicService} from "../../bin/services/topic.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  topicObservable$: Observable<Topic>;
  topic: Topic;
  postObservable$: Observable<Post[]>;
  posts!: Post[];

  constructor(
    private topicService: TopicService,
    private postService: PostService,
    private route: ActivatedRoute,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.topicObservable$ = this.topicService.getTopic(id);
    this.postObservable$ = this.postService.getPostsByTopics(id);
  }

  ngOnInit() {
    this.getTopic();
    this.getPosts();
  }

  getTopic() {
    this.topicObservable$.subscribe(topic => this.topic = topic);
  }

  getPosts() {
    this.postObservable$.subscribe(posts => this.posts = posts);
  }
}
