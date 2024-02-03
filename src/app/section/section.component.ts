import {Component} from '@angular/core';
import {SectionService} from "../../bin/services/section.service";
import {Section} from "../../bin/interface/section";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  sections!: Section[];

  constructor(
    private sectionService: SectionService,
  ) {
    this.sectionService.getSections().subscribe(sections=>this.sections = sections);
  }

}
