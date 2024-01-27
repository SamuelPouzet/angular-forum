import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../bin/interface/topic";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() topic!: Topic

  ngOnInit() {
    console.log(this.topic);
  }

  status() :string {
    switch (this.topic.status) {
      case 0:
        return 'locked.png';
    }
    return 'unlocked.png';
  }

}
