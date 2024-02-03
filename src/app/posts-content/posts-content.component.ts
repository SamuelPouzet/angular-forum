import {Component, Input} from '@angular/core';
import {Post} from "../../bin/interface/post";

@Component({
  selector: 'app-posts-content',
  templateUrl: './posts-content.component.html',
  styleUrls: ['./posts-content.component.css']
})
export class PostsContentComponent {
  @Input() post: Post;

}
